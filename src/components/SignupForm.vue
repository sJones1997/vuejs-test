<template lang="">
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" 
        required 
        v-model="email">

        <label>Password:</label>
        <input type="password" 
        required 
        v-model="password">
        <div v-if="passwordError">
            <p>{{passwordError}}</p>
        </div>

        <label>Role: </label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label>Skills</label>
        <input type="text" v-model="tempSkill" @keyup="addSkill">
        <div class="skill" v-for="(skill, i) in skills" :key="skill" @click="deleteSkill(i)">
            <p>{{skill}}</p>
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>Accept terms and conditions</label>
        </div>

        <div>
            <input type="checkbox" value="Sean" v-model="names">
            <label>Sean</label>
        </div>

        <div>
            <input type="checkbox" value="Bob" v-model="names">
            <label>Bob</label>
        </div>

        <div>
            <input type="checkbox" value="Mark" v-model="names">
            <label>Mark</label>
        </div>

        <div class="submit-form">
            <button>Submit</button>
        </div>
    </form>
</template>
<script>
export default {

    data(){
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e){
            if(e.keyCode === 32 && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                    this.skills.push(this.tempSkill)
                }

                this.tempSkill = ''
            }
        },
        deleteSkill(index){
            this.skills.splice(index, 1)
        },
        handleSubmit(){
            this.passwordError = this.password.length < 5 ? 'Password is shit' : ''


            if(!this.passwordError){
                console.log("submitted")
            }
        }
    }
    
}
</script>
<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background-color: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label {
        color:#aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color:#555;
        background: none;
    }

    input[type="checkbox"] {
        display: inline-block;
        width:16px;
        margin: 0 10px 0 0;
        position:relative;
        top:2px;
    }

    .skill {
        display: inline-block;
        background-color: #eee;
        height: auto;
        margin: 10px 5px;
        letter-spacing: 1px;
        font-size: 12px;
        padding: 6px 12px;
        cursor: pointer;
        color: #777;
        border-radius: 20px;
    }

    .skill p {
        padding: 0;
    }

    button {
        background-color: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color:#fff;
        border-radius: 20px;
    }
</style>