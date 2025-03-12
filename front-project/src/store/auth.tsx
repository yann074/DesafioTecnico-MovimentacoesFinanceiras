import { computed, ref } from "vue";

export const useAuth = () => {
    const token = ref(localStorage.getItem('token'));

    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }

    function logout() {
        localStorage.removeItem('token');
        token.value = null;
    }

    async function checkToken(){
        try{
            const tokenAuth = token.value   
            return tokenAuth
        }catch(error){
            console.log(error)
        }
    }

    const isAuthenticated = computed(() => !!token.value);

    return {
        token,
        setToken,
        logout,
        isAuthenticated,
        checkToken
    };
};
