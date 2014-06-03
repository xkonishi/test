Ext.define('MyApp.view.GridUtil', {
    extend: 'Ext.Base',

    singleton: true,

    completeEdit: function() {
        var grids = Ext.ComponentQuery.query('gridpanel');

        Ext.Array.each(grids, function(grid){
            var p = grid.getPlugin('celleditplugin');
            if (p) {
                p.completeEdit();
            }
        });

    }

});
