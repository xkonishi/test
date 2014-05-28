Ext.define('MyApp.override.form.field.Base', {
    override: 'Ext.form.field.Base',
    
    onFocus: function(e) {
    	var t = e.currentTarget;
        console.log('onFocus!! ['+t.id+']');
        Ext.get(t).focus({delay:100});
    },
    onBlur: function(e) {
    	var t = e.currentTarget;
        console.log('onBlur!! ['+t.id+']');
    }
    
});
