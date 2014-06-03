Ext.define('MyApp.override.form.field.Base', {
     override: 'Ext.form.field.Base',
    
    onFocus: function(e) {
    	var me = this;
    	me.callParent(arguments);

        console.log('onFocus!!', me);

        //グリッドの編集終了
        MyApp.view.GridUtil.completeEdit();

        //フォーカス設定
        me.focus({delay:100});
    }
    
});
