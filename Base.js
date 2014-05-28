Ext.define('MyApp.override.form.field.Base', {
    override: 'Ext.form.field.Base',
    
    onFocus: function(e) {
        console.log('onFocus!!');
        
        var me = this;
        me.callParent(arguments);
        me.focus({delay:100});
    } 
});
