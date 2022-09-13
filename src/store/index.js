import { createStore } from 'vuex'
 import createPersistedState from "vuex-persistedstate";
import router from '@/router';
import { nextTick } from 'vue';

const api = "https://smangele-api.herokuapp.com/";
console.log(api);

export default createStore({
  state: {
    user: null,
    users: null,
    token: null,
    Therapy: null,
    one_therapy: null,
    return :{
      showLoading: !null,
    }
  },
  getters: {
  },
  mutations: {
    setUsers:(state, users) =>{
      state.users = users;
    },
    setUser:(state, user) =>{
      state.user = user;
    },
    setToken:(state, token) =>{
      state.token = token;
    },
    setTherapy:(state, Therapy) =>{
      state.Therapy = Therapy;
    },
    setOne_therapy:(state,one_therapy) =>{
      state.one_therapy = one_therapy;
    },
    logOut(state){
      state.user = null,
      state.token = null
    },
    setShowLoading(state){
      state.showLoading =showLoading;

    },
    sortTherapybyCategory: (state) => {
      state.Therapy = state.programs.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.Therapy.reverse();
      }
      state.asc = !state.asc;
    },
    sortTherapybyTitle: (state) => {
      state.Therapy = state.programs.sort((a, b) => {
        if (a.Therapy < b.Therapy) {
          return -1;
        }
        if (a.Therapy > b.Therapy) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.Therapy.reverse();
      }
      state.asc = !state.asc;
    },

  },
  actions: { 
     getUser :async (context,token) => {
      fetch('https://smangele-api.herokuapp.com/users/verify',{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`
        }
      })
      .then((res) => res.json())
      .then((userdata) => {
        console.log(userdata);
        context.commit('setUser', userdata)
      })
    },

    login: async (context, payload) => {
   let res = await fetch("https://smangele-api.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:
        JSON.stringify({
          email:payload.email,
          password:payload.password,
        }),
      })
      .then(res => res.json())
      .then(tokendata =>{
        console.log(tokendata.token);
        context.commit('setToken', tokendata.token),
        fetch('https://smangele-api.herokuapp.com/users/verify',{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${tokendata.token}`
          }
        })
        .then((res) => res.json())
        .then((userdata) => {
          console.log(userdata);
          context.commit('setUser', userdata)
        });
        window.alert("Logged in")
        router.push('/Therapy')
      });
      
   
    }, 

    register: async (context, data) => {
      console.log("working");
      const {
        email,
        password,
        full_name,
        phone,
        user_type,     
        
      } = data;
      fetch("https://smangele-api.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          password: password,
          phone: phone,
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
          context.commit("setusers", json)
        });
      router.push("/login");
    },
    getUsers: async (context) => {
      fetch("https://smangele-api.herokuapp.com/users")
        .then((response) => response.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      fetch("https://smangele-api.herokuapp.com/users/" + id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
    getTherapy: async (context) => {
      fetch("https://smangele-api.herokuapp.com/Therapy/")
        .then((response) => response.json())
        .then((Therapy) => context.commit("setTherapy", Therapy));
    },
    addOne_Therapy: async (context, one_Therapy) => {
      console.log(one_Therapy);
      fetch("https://smangele-api.herokuapp.com/Therapy", {
        method: "POST",
        body: JSON.stringify(one_Therapy),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((one_Therapydata) => {
         console.log(one_Therapydata);
          context.commit("setTherapy")
        });
    },
    deleteOne_Therapy: async (context, id) => {
      fetch(`${api}/Therapy/${id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getTherapy"));
    },
    updateOne_therapy: async (context, payload) => {
      console.log("updating");

      const {
        Therapy_id,
        title,
        description,
        category,
        image,
        Appointment_date,  
        Start_time,     
        End_time,
      } = payload;
      fetch("https://smangele-api.herokuapp.com/Therapy/" + payload.id, {
        method: "PUT",
        body: JSON.stringify({
          Therapy_id: Therapy_id,
          title: title,
          description: description,
           category: category,
          image:image,
         Appointment_date: Appointment_date,
          Start_time:Start_time,
         End_time: End_time,
                 
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
    addUser: async (context, user) => {
      console.log(user);
      fetch("https://smangele-api.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((Userdata) => {
         console.log(Userdata);
          context.commit("setUsers")
        });
    },
    deleteUser: async (context, Id) => {
      fetch(`${api}/users/${Id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getUser"));
    },
    updateUser: async (context, payload) => {
      console.log("updating");
      const {
        user_Id,
         email,  
         password,
        full_name,
        phone,
        user_type,
      } = payload;
      fetch("https://smangele-api.herokuapp.com/Therapy/" + payload.Id, {
        method: "PUT",
        body: JSON.stringify({
          user_Id: user_Id,
           email: email,
            password: password,
          full_name: full_name,
         phone: phone,
          user_type: user_type,
                
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setUser", data)
        });}
    
    
  },
  modules: {
  },
  plugins: [createPersistedState()]
})