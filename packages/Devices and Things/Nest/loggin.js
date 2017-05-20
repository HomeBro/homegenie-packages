$$.widget = {
  name: 'Nest Loggin',
  version: '1.0',
  author: 'Saue0',
  release: '2017-05-13',
  icon: 'pages/control/widgets/erx/nest/images/nest-icons-house.png'
};

/*
# Quick-Reference

 "$$" is the widget class instance object

 Widget class methods and properties:

 Get the jQuery element for a "data-ui" field
   $$.field('<widget_field_name>')

 Get the jQuery element in the main document
   $$.field('<document_tree_selector>', true)

 Call HG API Web Service 
   $$.apiCall('<api_method>', function(response){ ... })

 Get the bound module object
   $$.module

 Get a parameter of the bound module
   $$.module.prop('<param_name>')
   e.g.: $$.module.prop('Status.Level')

 Invoke a module command
   $$.module.command('<api_command>', '<command_options>', function(response) { ... })
   e.g.: $$.module.command('Control.Off')

 Shorthand for HG.Ui
   $$.ui

 Shorthand for HG.WebApp.Utility
   $$.util

 Shorthand for HG.WebApp.Locales
   $$.locales

 Blink a widget field and the status led image (if present)
   $$.signalActity('<widget_field_name>') 

 For a reference of HomeGenie Javascript API see:
   https://github.com/genielabs/HomeGenie/tree/master/BaseFiles/Common/html/js/api

*/

// Widget base class methods


// This method is called when the widget starts
$$.onStart = function() {
  // handle ui elements events
  $$.field('btn-pin').bind('click', function(){
    btnPinClicked();
  });
  $$.apiCall('','HomeAutomation.NestConfig','Url','', function(response){ 
    $$.url = response;
  });
 }

// This method is called when the widget UI is request to refresh its view
$$.onRefresh = function () {
  $$.field('lbl-name').html($$.module.Name + " (" + $$.module.DeviceType + ")");
  $$.field('lbl-description').html('Config');
  $$.field('lbl-info').html('Help set authorisation');
}

// This method is called when the bound module raises a parameter event
// eg.: parameter = 'Status.Level', value = '1'
$$.onUpdate = function(parameter, value) {
}

// This method is called when the widget stops
$$.onStop = function() {
}

// user-defined methods implemented for this widget
btnPinClicked = function() {
	window.open($$.url,'_blank');
};


