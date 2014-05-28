Ext.define('MyApp.override.form.field.Base', {
    override: 'Ext.form.field.Base',
    
    onFocus: function(e) {
        console.log('onFocus!!');
        
        var me = this;
        mefocus({delay:100});
    } 
});
