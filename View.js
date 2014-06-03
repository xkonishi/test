Ext.define('MyApp.override.grid.View', {
    override: 'Ext.grid.View',
    
    onItemMouseDown: function() {
    	var me = this;
    	me.callParent(arguments);

       console.log('GridView - onItemMouseDown!!');

        //グリッドの編集終了
        MyApp.view.GridUtil.completeEdit();
    }
    
});
