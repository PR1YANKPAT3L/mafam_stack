injectTapEventPlugin();

FlowRouter.route('/login', {
  name: 'login',
  action() {
  	DocHead.setTitle('Mafam | Login');
  	DocHead.addMeta({
  	  name: "viewport",
  	  content: "width=device-width, initial-scale=1"
  	});
    ReactLayout.render(MainLayout, {
        content: <LoginContainer />
    }); 
  }
});