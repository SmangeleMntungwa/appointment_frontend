import { createStore } from 'vuex'
 import createPersistedState from "vuex-persistedstate";
import router from '@/router';
import { nextTick } from 'vue';

const api = "https://smangele-api.herokuapp.com";
console.log(api);

export default createStore({
  state: {
    patient: null,
    Patients: null,
    token: null,
    Therapy: null,
    One_therapy: null,
    return :{
      showLoading: null,
    }
  },
  getters: {
  },
  mutations: {
    setPatients:(state, Patients) =>{
      state.Patients = Patients;
    },
    setPatients:(state, Patients) =>{
      state.Patients = Patients;
    },
    setToken:(state, token) =>{
      state.token = token;
    },
    setTherapy:(state, Therapy) =>{
      state.Therapy = Therapy;
    },
    setOne_therapy:(state, One_therapy) =>{
      state.One_therapy = One_therapy;
    },
    logOut(state){
      state.patient = null,
      state.token = null
    },
    setShowLoading(state){
      state.showLoading =showLoading;

    },
    sortTherapybyCategory: (state) => {
      state.Therapy = state.programs.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.books.reverse();
      }
      state.asc = !state.asc;
    },
    sortBooksbyTitle: (state) => {
      state.books = state.programs.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.books.reverse();
      }
      state.asc = !state.asc;
    },

  },
  actions: { 
     getpatient :async (context,token) => {
      fetch('https://smangele-api.herokuapp.com/Patients/verify',{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`
        }
      })
      .then((res) => res.json())
      .then((patientdata) => {
        console.log(patientdata);
        context.commit('setPatient', patientdata)
      })
    },
    login: async (context, payload) => {


      let res = await fetch("https://smangele-api.herokuapp.com/Patients/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
      .then(res => res.json())
      .then(tokendata=>{
        console.log(tokendata.token);
        context.commit('setToken', tokendata.token),
        fetch('https://smangele-api.herokuapp.com/Patients/verify',{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${tokendata.token}`
          }
        })
        .then((res) => res.json())
        .then((patientdata) => {
          console.log(patientdata);
          context.commit('setPatient', patientdata)
        });
        window.alert("Logged in")
        router.push('/Therapy')
      });
      
   
    }, 

    register: async (context, data) => {
      console.log("working");
      const {
        full_name,
        password,
        phone_number,
        email,
        join_date,  
        user_type,     
        cart,
      } = data;
      fetch("https://smangele-api.herokuapp.com/Patients/register", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          password: password,
          phone_number: phone_number,
          email: email,
          user_type: user_type,
          // cart: cart,          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setPatients", json)
        });
      router.push("/login");
    },
    getUsers: async (context) => {
      fetch("https://smangele-api.herokuapp.com/Patients")
        .then((response) => response.json())
        .then((Patients) => context.commit("setPatients", Patients));
    },
    getUser: async (context, id) => {
      fetch("https://smangele-api.herokuapp.com/Patients/" + id)
        .then((response) => response.json())
        .then((Patients) => context.commit("setPatient", patient[0]));
    },
    getBooks: async (context) => {
      fetch("https://smangele-api.herokuapp.com/Therapy/")
        .then((response) => response.json())
        .then((Therapy) => context.commit("setTherapy", Therapy));
    },
    addBook: async (context, One_therapy) => {
      console.log(One_therapy);
      fetch("https://smangele-api.herokuapp.com/One_therapy", {
        method: "POST",
        body: JSON.stringify(One_therapy),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((One_therapydata) => {
         console.log(One_therapydata);
          context.commit("setTherapy")
        });
    },
    deleteBook: async (context, id) => {
      fetch(`${api}/Therapy/${id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getTherapy"));
    },
    updateBook: async (context, payload) => {
      console.log("updating");
      const {
        title,
        author,
        publisher,
        category,
        price,  
        quantity,     
        imgURL,
      } = payload;
      fetch("https://smangele-api.herokuapp.com/Therapy/" + payload.id, {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          author: author,
          publisher: publisher,
          category: category,
          price: price,
          quantity:quantity,
          imgURL: imgURL,
          // cart: cart,          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setTherapy", data)
        });
    },
    addUser: async (context, patient) => {
      console.log(user);
      fetch("https://smangele-api.herokuapp.com/Patients/", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((patientdata) => {
         console.log(patientdata);
          context.commit("setPatients")
        });
    },
    deleteUser: async (context, Id) => {
      fetch(`${api}/Patients/${Id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getPatients"));
    },
    updatepatient: async (context, payload) => {
      console.log("updating");
      const {
        full_name,
        password,
        phone_number,
        category,
        email,  
        join_date,     
        user_type,
      } = payload;
      fetch("https://smangele-api.herokuapp.com/Therapy/" + payload.id, {
        method: "PUT",
        body: JSON.stringify({
          full_name: full_name,
          password: password,
          phone_number: phone_number,
          category: category,
          email: email,
          join_date:join_date,
          user_type: user_type,
          // cart: cart,          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setPatient", data)
        });}
    
    
  },
  modules: {
  },
  plugins: [createPersistedState()]
})