Ext.define('MyApp.override.button.Button', {
    override: 'Ext.button.Button',

    onMouseOver: function(e) {
    	var me = this;
    	me.callParent(arguments);

        var date = me.up('datepicker');
        if (date) {
            return;
        }
        
        console.log('Button - MouseOver!!');

        //グリッドの編集終了
        MyApp.view.GridUtil.completeEdit();

        //フォーカス設定
        this.focus({delay:100});
    }
    
});
