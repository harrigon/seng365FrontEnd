<template>
    <div>

            <div class="container">
                <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-white">

                    <a class="navbar-brand" href="http://localhost:8080">Crowd Funding Website</a>

                    <div v-if="token==''">
                        <button type="button" class="btn btn-primary" data-toggle="modal"
                                data-target="#logInModal">
                             Log In
                        </button>
                    </div>

                    <div v-else>
                        <button type="button" class="btn btn-primary" v-on:click="logOut()" data-toggle="modal">
                            Log Out
                        </button>
                    </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#signUpModal">
                        Sign Up
                    </button>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>


                <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog"
                     aria-labelledby="signUpModal" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class = "modal-title" id="signUpModalLabel">Register New User</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Username:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="text" placeholder="Enter your Username" v-model="signUpForm.username" required></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Email:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="email" placeholder="Enter your Email Address" v-model="signUpForm.email" required></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Password:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="password" placeholder="Enter your Password" v-model="signUpForm.password" required></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Location:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="text" placeholder="Enter your Location" v-model="signUpForm.location"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" v-on:click="createUser()" data-dismiss="modal">Submit</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="logInModal" tabindex="-1" role="dialog"
                     aria-labelledby="signUpModal" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class = "modal-title" id="logInModalLabel">Log in to your account</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Username:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="text" placeholder="Enter your Username" v-model="logInForm.username" required></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Email:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="email" placeholder="Enter your Email Address" v-model="logInForm.email" required></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row class="my-1">
                                    <b-col sm="2"><label for="input-small">Password:</label></b-col>
                                    <b-col sm="10">
                                        <b-form-input id="input-small" size="sm" type="password" placeholder="Enter your Password" v-model="logInForm.password" required></b-form-input>
                                    </b-col>
                                </b-row>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" v-on:click="logInUser()" data-dismiss="modal">Log</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="modal fade" id="showProjectModal" tabindex="-1" role="dialog"
                     aria-labelledby="signUpModal" aria-hidden="true" width="100%" minWidth="900">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                    <div id = "project">
                                        <h1>{{currentProject.title}}</h1>
                                        <b-img center rounded :src="'http://localhost:4942/api/v2' + currentProject.imageUri" alt="Responsive image" class="Image" maxWidth="500"/>
                                        <h4>{{currentProject.subtitle}}</h4>
                                        <p> Creation Date {{getCurrentProjectDate()}}<br /> Creators : {{currentProject.creators[0].username}} <br /> Target: {{currentProject.target}}</p>
                                        <p>{{currentProject.description}}</p>
                                        <table style="border: 2px solid black">
                                            <tr style="border: 2px solid black">
                                                <th>Reward</th>
                                                <th>Amount</th>
                                            </tr>

                                            <tr v-for="reward in currentProject.rewards" style="border: 1px solid black">
                                                <td>{{reward.description}}</td>
                                                <td>{{reward.amount}}</td>
                                            </tr>
                                        </table>

                                        <!---------------------BACKER TABLE TO IMPLEMENT-------------------------->
                                        <!--<table style="border: 2px solid black">-->
                                            <!--<tr style="border: 2px solid black">-->
                                                <!--<th>Backer</th>-->
                                                <!--<th>Amount</th>-->
                                            <!--</tr>-->

                                            <!--<tr v-for="backer in currentProject.backers" style="border: 1px solid black">-->
                                                <!--<td>{{backer.}}</td>-->
                                                <!--<td>{{reward.amount}}</td>-->
                                            <!--</tr>-->
                                        <!--</table>-->
                                    </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div v-if="errorFlag" style="color: red;">
                {{ error }}
            </div>


            <div v-else>
                <div id="users">
                    <b-img src="https://lorempixel.com/1024/400/" fluid alt="Responsive image" />
                        <div class="card-columns">
                            <div class="col-lg-6">
                            <div v-for="project in projects">

                                        <b-card :header="project.title"
                                                header-text-variant="dark"
                                                :img-src="'http://localhost:4942/api/v2' + project.imageUri"
                                                img-alt="Image"
                                                img-top
                                                tag="article"
                                                style="max-width: 25rem;"
                                                class="mb-2"
                                                bg-variant="secondary"
                                                text-variant="white"
                                                border-variant="success">
                                            <p class="card-text">
                                                {{project.subtitle}}
                                            </p>
                                            <!--<b-button :href="'/' + project.id" variant="dark" @click="getSingleProject(project.id)" >See More</b-button>-->
                                            <!--<b-button  variant="dark" @click="getSingleProject(project.id)" data-toggle="modal"-->
                                                       <!--data-target="#showProjectModal" >See More</b-button>-->

                                            <button type="button" class="btn btn-primary" v-on:click="getSingleProject(project.id)"data-toggle="modal"
                                                    data-target="#showProjectModal">
                                                See More
                                            </button>


                                        </b-card>
                                    </div>
                            </div>
                        </div>
                    <b-button  variant="dark" @click="test" >test</b-button>


                </div>
            </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                error: "",
                errorFlag: false,
                projects: [],
                currentProject: {creators:[{username: ''}, ], rewards:[{description: '', amount: ''}]},
                currentId: "",
                token: '',
                signUpForm: {
                    email: '',
                    username: '',
                    location: '',
                    password: ''
                },
                logInForm: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        mounted: function() {
            this.getProjects();
        },
        methods: {
            getProjects: function(){
                this.$http.get('http://localhost:4942/api/v2/projects/')
                    .then(function(response){
                        this.projects = response.data;
                    }, function(error) {
                        this.error = error;
                        this.errorFlag = true;
                    });
            },
            createUser: function(){
                if(false){

                }
                else
                {
                    this.$http.post('http://localhost:4942/api/v2/users/', {
                        "username": this.signUpForm.username,
                        "email": this.signUpForm.email,
                        "password": this.signUpForm.password,
                        "location": this.signUpForm.location
                    })
                        .then(function (response) {
                            console.log(response)
                        }, function (error) {
                            this.error = error;
                            this.errorFlag = true;
                        });
                }
            },
            logInUser: function(){
                if(this.logInForm.username == ''){
                    this.$http.post('http://localhost:4942/api/v2/users/login?email=' + this.logInForm.email +'&password=' + this.logInForm.password, {
                    })
                        .then(function (response) {
                            this.token = response.body.token;

                        }, function (error) {
                            this.error = error;
                        });


                }
                else
                {
                    this.$http.post('http://localhost:4942/api/v2/users/login?username=' + this.logInForm.username +'&password=' + this.logInForm.password, {
                    })
                        .then(function (response) {
                            console.log(response)
                            this.token = response.body.token;
                        }, function (error) {
                            this.error = error;
                        });
                }
            },
            logOut: function(){
                if(false){


                }
                else
                {
                    console.log("token",this.token)
                    this.$http.post('http://localhost:4942/api/v2/users/logout',{},{
                        headers: {'X-Authorization': this.token}
                    })
                        .then(function (response) {
                            console.log(response);
                            this.token = '';
                        }, function (error) {
                            this.error = error;
                        });
                }
            },
            test: function () {
                console.log(this.currentProject);
                console.log("token", this.token);

            },


            getSingleProject: function(id){
                console.log(id);
                this.currentId = id;
                this.$http.get('http://localhost:4942/api/v2/projects/' + id)
                    .then((response) => {

                        this.currentProject = response.data;
                    }, (error) => {
                        this.error = error;
                        this.errorFlag = true;
                    });
            },


            getCurrentProjectDate: function(){
                return new Date(this.currentProject.creationDate)
            },


        }
    }
</script>


table {
width:100%;
margin: 10px auto;


}

.modal fade{
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 150%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}