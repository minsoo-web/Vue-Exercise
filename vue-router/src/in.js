export default new Router({
    routes : [
        // 지정된 경로
        {
            path : "redirect-me",
            redirect : {
                name : "users'
            }
        },{
            path : '/*',
            redirect :{
                name : 'home'
            }
        }
    ]
})