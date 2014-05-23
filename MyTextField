Ext.define('MyApp.view.MyTextField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.mytextfield',

    fieldLabel: 'Label',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                focus: {
                    fn: me.onTextfieldFocus,
                    scope: me
                },
                blur: {
                    fn: me.onTextfieldBlur,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onTextfieldFocus: function(component, e, eOpts) {
        console.log('focus!!');

        component.focus(false, 100);

    },

    onTextfieldBlur: function(component, e, eOpts) {
        console.log('blur!!');

    }

});
