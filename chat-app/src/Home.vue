Shit to do

Story 1 :   Restrict projects based on word in title/description

Story 2 :

Story 3 :   Non empty Password
            Unique/valid email address
            Unique username
            Log on automatically.


Standardise dividing money by 100?
Apparently create a project changes didnt fucking save


<template>
    <div>

            <div class="container">

                <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-white">

                    <a class="navbar-brand" href="http://localhost:8080">Crowderino Funderino</a>

                    <div v-if="token==''">
                        <button type="button" class="btn text-left btn-primary" data-toggle="modal"
                                data-target="#logInModal" style="float: left;">
                             Log In
                        </button>
                    </div>

                    <div v-else>
                        <button type="button" class="btn text-left btn-primary" v-on:click="logOut()" data-toggle="modal">
                            Log Out
                        </button>
                        <button type="button" class="btn text-left btn-primary"  href="http://localhost:8080/myProjects" data-toggle="modal">
                            My Projects
                        </button>
                        <button type="button" class="btn text-left btn-primary" data-toggle="modal" data-target="#projectCreationModal">
                            Create a Project
                        </button>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#signUpModal">
                        Sign Up
                    </button>
                    <div>
                    <b-form-input id="input-small" size="sm" type="text" placeholder="Search Projects.." v-model="searchParameter" required></b-form-input></div>
                    <div><button class="btn btn-outline-success" v-on:click="searchProjects()">Search</button></div>
                </nav>


                <!--SIGN UP MODAL-->
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
                <!--SIGN UP MODAL-->

                <!--LOG IN MODAL-->

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
                                <button type="button" class="btn btn-secondary" v-on:click="logInUser()" data-dismiss="modal">Log In</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--LOG IN MODAL-->

                <!--SHOW PROJECT MODAL-->

                <div class="modal fade" id="showProjectModal" tabindex="-1" role="dialog"
                     aria-labelledby="signUpModal" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div id = "project">
                                    <h1>{{currentProject.title}}</h1>
                                    <b-img center rounded :src="'http://csse-s365.canterbury.ac.nz:4851/api/v2' + currentProject.imageUri" alt="Responsive image" fluid-grow class="Image"/>
                                    <h4>{{currentProject.subtitle}}</h4>
                                    <p> Creation Date {{getCurrentProjectDate()}}<br /> Creators : {{currentProject.creators[0].username}} <br /> Target: {{currentProject.target}}</p>
                                    <p>{{currentProject.description}}</p>
                                    <p>Progress: {{totalDonations}}/{{currentProject.target}} <br /> Total Backers: {{totalBackers}}</p>
                                    <table style="border: 2px solid black">
                                        <tr style="border: 2px solid black">
                                            <th>Reward</th>
                                            <th>Amount</th>
                                        </tr>

                                        <tr v-for="reward in currentProject.rewards" style="border: 1px solid black">
                                            <td>{{reward.description}}</td>
                                            <td>{{reward.amount/100}}</td>
                                        </tr>
                                    </table>
                                    <div v-if="token==''">
                                        <h4>Log in to pledge!</h4>
                                    </div>
                                    <div v-else>

                                        <b-row class="my-1">
                                            <b-col sm="2">
                                                <button type="button" class="btn btn-primary" v-on:click="pledgeToProject(pledgeValue)" data-dismiss="modal" data-toggle="modal" data-target="#successfulDonationModal">
                                                Pledge
                                                </button>
                                            </b-col>
                                            <b-col sm="5">
                                                <b-form-input id="input-small" size="sm" type="number" placeholder="5.00" v-model="pledgeValue" required></b-form-input>
                                            </b-col>
                                            <b-col sm="5">
                                                <b-form-checkbox id="checkbox1"
                                                                 v-model="anonymousDonation"
                                                                 value="true"
                                                                 unchecked-value="false">
                                                   Anonymous Pledge
                                                </b-form-checkbox>
                                            </b-col>
                                        </b-row>

                                    </div>
                                    <table style="border: 2px solid black; margin:auto">
                                        <tr style="border: 2px solid black">
                                            <th>Backer</th>
                                            <th>Amount</th>
                                        </tr>

                                        <tr v-for="backer in mostRecentBackers" style="border: 1px solid black">
                                            <td>{{backer.username}}</td>
                                            <td>{{backer.amount}}</td>
                                        </tr>
                                        <tr>
                                            <th>Anonymous</th>
                                            <td>{{anonymousDonations}}</td>
                                        </tr>
                                    </table>



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
        <!--SHOW PROJECT MODAL-->

        <!--SUCCESSFUL DONATION MODAL-->

        <div class="modal fade" id="successfulDonationModal" tabindex="-1" role="dialog"
             aria-labelledby="signUpModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class = "modal-title" id="successfulDonationLabel">Log in to your account</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h2>Successful Donation! Thank you for contributing </h2>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Back Home
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!--SUCCESSFUL DONATION MODAL-->

        <!--PROJECT CREATION MODAL-->
        <div class="modal fade" id="projectCreationModal" tabindex="-1" role="dialog"
             aria-labelledby="signUpModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class = "modal-title" id="projectCreationLabel">Create A Project</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <b-row class="my-1">
                            <b-col sm="2"><label for="input-small">Title:</label></b-col>
                            <b-col sm="10">
                                <b-form-input id="input-small" size="sm" type="text" placeholder="Project Title" v-model="projectCreationForm.title" required></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col sm="2"><label for="input-small">Subtitle:</label></b-col>
                            <b-col sm="10">
                                <b-form-input id="input-small" size="sm" type="text" placeholder="Project Subtitle" v-model="projectCreationForm.subtitle" required></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="2"><label for="input-small">Description:</label></b-col>
                            <b-col sm="10">
                                <b-form-textarea id="textarea1" :rows="3" :max-rows="6" placeholder="Project Description" v-model="projectCreationForm.description" required></b-form-textarea>
                            </b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="2"><label for="input-small">Target:</label></b-col>
                            <b-col sm="10">
                                <b-form-input id="input-small" size="sm" type="number" placeholder="Target" v-model="projectCreationForm.target" required></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col sm="2">Image:</b-col>
                            <b-col><b-form-file id="file_input1" accept=".jpg, .png"> v-model="projectCreationForm.image"></b-form-file></b-col>
                        </b-row>
                        <div>

                            <b-btn v-b-toggle.collapse1 variant="primary">Add A Reward </b-btn>
                            <b-collapse id="collapse1" class="mt-2">
                                <b-card>
                                    <b-row class="my-1">
                                        <b-col sm="2"><label for="input-small">Reward:</label></b-col>
                                        <b-col sm="10">
                                            <b-form-textarea id="textarea1" :rows="3" :max-rows="6" placeholder="Reward Description" v-model="projectCreationForm.tempReward" required></b-form-textarea>
                                        </b-col>
                                    </b-row>

                                    <b-row class="my-1">
                                        <b-col sm="2"><label for="input-small">Amount:</label></b-col>
                                        <b-col sm="10">
                                            <b-form-input id="input-small" size="sm" type="number" placeholder="Amount" v-model="projectCreationForm.tempAmount" required></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-btn v-b-toggle.collapse1 variant="primary" v-b-toggle.collapse1_inner v-on:click="addReward()">Submit Reward </b-btn>
                             </b-card>
                            </b-collapse>
                        </div>


                        <table style="border: 2px solid black; margin:auto;width:100%">
                        <tr style="border: 2px solid black">
                        <th>Reward Description</th>
                        <th>Reward Amount</th>
                        </tr>
                            <tr v-for="reward in projectCreationForm.rewards"style="border: 1px solid black">
                            <td>{{reward.description}}</td>
                            <td>{{reward.amount}}</td>
                            </tr>
                        </table>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" v-on:click="createProject()" data-dismiss="modal">Create Project</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--PROJECT CREATION MODAL-->

        <!--HOME PAGE-->
        <div v-if="errorFlag" style="color: red;">
                {{ error }}
            </div>


        <div v-else>
            <div id="users">
                <!--<b-img src="https://lorempixel.com/1024/400/" fluid-grow alt="Responsive image" />-->
                <b-container>
                    <b-card-group columns>
                        <div v-for="project in projects">

                                    <b-card :header="project.title"
                                            header-text-variant="dark"
                                            :img-src="'http://csse-s365.canterbury.ac.nz:4851/api/v2' + project.imageUri"
                                            img-alt="Image"
                                            img-fluid
                                            tag="article"
                                            style="max-width: 25rem;"
                                            class="mb-2"
                                            bg-variant="secondary"
                                            text-variant="white"
                                            border-variant="success">
                                        <p class="card-text">
                                            {{project.subtitle}}
                                        </p>
                                        <button type="button" class="btn btn-primary" v-on:click="getSingleProject(project.id)"data-toggle="modal"
                                                data-target="#showProjectModal">
                                            See More
                                        </button>


                                    </b-card>
                        </div>
                    </b-card-group>
                    </b-container>
                    </div>
                <b-button  variant="dark" @click="test" >test</b-button>


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
                currentUserId: '',
                token: '',
                anonymousDonations: 0,
                totalDonations:0,
                totalBackers:0,
                mostRecentBackers: [],
                pledgeValue: '',
                searchParameter: '',
                anonymousDonation: "false",
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
                },
                projectCreationForm: {
                    title: '',
                    numberRewards: 2,
                    subtitle: '',
                    description: '',
                    target: '',
                    rewards: [],
                    tempAmount: '',
                    tempReward: '',
                    image: ''
                }
            }
        },
        mounted: function() {
            this.getProjects();
        },

        methods: {
            getProjects: function(){
                this.$http.get('http://csse-s365.canterbury.ac.nz:4851/api/v2/projects?open=true')
                    .then(function(response){
                        this.projects = response.data;
                    }, function(error) {
                        this.error = error;
                        this.errorFlag = true;
                    });
            },
            searchProjects: function(){
                this.$http.get('http://csse-s365.canterbury.ac.nz:4851/api/v2/projects?open=true')
                    .then(function(response){
                        this.projects = [];
                        for(var i = 0; i <response.data.length; i++){
                            console.log(response.data[i].title, this.searchParmeter)
                            if(response.data[i].title.toLowerCase().includes(this.searchParameter.toLowerCase()) || response.data[i].subtitle.toLowerCase().includes(this.searchParameter.toLowerCase())){
                                console.log("YEAH BOI")
                                this.projects.push(response.data[i]);
                            }
                        }
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
                    this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/users/', {
                        "username": this.signUpForm.username,
                        "email": this.signUpForm.email,
                        "password": this.signUpForm.password,
                        "location": this.signUpForm.location
                    })
                        .then(function (response) {
                            this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/users/login?email=' + this.signUpForm.email +'&password=' + this.signUpForm.password, {
                            })
                                .then(function (response2) {
                                    this.token = response2.body.token;
                                    this.currentUserId = response2.body.id;

                                }, function (error) {
                                    this.error = error;
                                });
                        }, function (error) {
                            this.error = error;
                            this.errorFlag = true;
                        });


                }
            },
            createProject: function(){
                if(false){

                }
                else
                {
                    this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/projects/', {
                        "title": this.projectCreationForm.title,
                        "description": this.projectCreationForm.description,
                        "subtitle": this.projectCreationForm.subtitle,
                        "target": parseInt(this.projectCreationForm.target),
                        "creators": [{"id":this.currentUserId}],
                        "rewards": this.projectCreationForm.rewards
                    },{
                        headers: {'X-Authorization': this.token}
                    })
                        .then((response) => {
                            this.getProjects();
                            this.projectCreationForm = {
                                title: '',
                                numberRewards: 2,
                                subtitle: '',
                                description: '',
                                target: '',
                                rewards: [],
                                tempAmount: '',
                                tempReward: '',
                            };
//                            console.log(response.body.id)
//                            this.$http.put('http://csse-s365.canterbury.ac.nz:4851/api/v2/users/projects/' + response.body.id + '/image', {
//                            {this.projectCreationForm.image}
//                            }                    }, (error) => {
//                            this.error = error;
//                            this.errorFlag = true;
                        });

                }
            },
            logInUser: function(){
                if(this.logInForm.username == ''){
                    this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/users/login?email=' + this.logInForm.email +'&password=' + this.logInForm.password, {
                    })
                        .then(function (response) {
                            this.token = response.body.token;
                            this.currentUserId = response.body.id;

                        }, function (error) {
                            this.error = error;
                        });


                }
                else
                {
                    this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/users/login?username=' + this.logInForm.username +'&password=' + this.logInForm.password, {
                    })
                        .then(function (response) {
                            console.log(response)
                            this.token = response.body.token;
                            this.currentUserId = response.body.id;
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
                    this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/users/logout',{},{
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
            getSingleProject: function(id){
                console.log(id);
                this.currentId = id;
                this.$http.get('http://csse-s365.canterbury.ac.nz:4851/api/v2/projects/' + id)
                    .then((response) => {

                        this.currentProject = response.data;
                        var count = 0;
                        this.mostRecentBackers = [];
                        this.anonymousDonations = 0;
                        this.totalDonations = 0;
                        this.totalBackers = 0;
                        for(var i =0; i < this.currentProject.backers.length; i++){
                            this.totalDonations += this.currentProject.backers[i].amount;
                            this.totalBackers +=1 ;
                            if(this.currentProject.backers[i].username == 'anonymous') {
                                this.anonymousDonations += this.currentProject.backers[i].amount;
                            }
                            else if (count < 5){
                                this.mostRecentBackers.push(this.currentProject.backers[i]);
                                count++;
                            }
                        }
                    }, (error) => {
                        this.error = error;
                        this.errorFlag = true;
                    });




            },

            pledgeToProject: function(amount){
                let anonymous = '';
                if(this.anonymousDonation == "true"){anonymous = true;}
                else{anonymous = false;}
                if(false){

                }
                else
                {
                    console.log(this.currentProject.id)
                    this.$http.post('http://csse-s365.canterbury.ac.nz:4851/api/v2/projects/' + this.currentProject.id + '/pledge', {
                        "id": this.currentUserId,
                        "amount": parseInt(amount),
                        "anonymous": anonymous,
                        "card": {
                            "authToken": "Thisdoesntevenmatter"
                        }
                    },{
                        headers: {'X-Authorization': this.token}
                    })
                        .then(function (response) {
                            console.log(response)
                        }, function (error) {
                            this.error = error;
                        });
                }
            },

            test: function () {
                console.log(this.currentProject);
                console.log("token", this.token);
                console.log(this.message);
                console.log(this.searchParameter);

            },

            addReward: function(){
              this.projectCreationForm.rewards.push({
                  "amount": parseInt(this.projectCreationForm.tempAmount),
                  "description": this.projectCreationForm.tempReward
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