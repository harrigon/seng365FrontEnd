<template>
    <div>
        myProjects!


    </div>

</template>


<script>
    export default {
        data(){
            return{
                error: "",
                errorFlag: false,
                users: []
            }
        },
        mounted: function() {
            this.getProjects();
        },
        methods: {
            getProjects: function(){
                this.$http.get('http://localhost:4941/api/users/')
                    .then(function(response){
                        this.users = response.data;
                    }, function(error) {
                        this.error = error;
                        this.errorFlag = true;
                    });
            }

        }
    }
</script>