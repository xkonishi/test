Ext.define('MyApp.override.data.writer.Json', {
    override: 'Ext.data.writer.Json',
    
    getRecordData: function(record) {
        debugger;
        
//         var data = this.self.superclass.getRecordData(record);
//         return data;
        
        
        //Setup variables
        var me = this, i, association, childStore;//, data = record.data;
        //親モデルのレコードは既存のgetRecordDataで作成する
        var data = this.self.superclass.getRecordData(record);

        //子モデルのレコードは以下で作成する
        
        //Iterate over all the hasMany associations
        for (i = 0; i < record.associations.length; i++) {
            association = record.associations.get(i);
            data[association.name] = null;
            childStore = record[association.storeName];

            //Iterate over all the children in the current association
            childStore.each(function(childRecord) {

                if (!data[association.name]){
                    data[association.name] = [];
                }

                //Recursively get the record data for children (depth first)
                var childData = this.getRecordData.call(this, childRecord);

                /*
                 * If the child was marked dirty or phantom it must be added. If there was data returned that was neither
                 * dirty or phantom, this means that the depth first recursion has detected that it has a child which is
                 * either dirty or phantom. For this child to be put into the prepared data, it's parents must be in place whether
                 * they were modified or not.
                 */
                if (childRecord.dirty | childRecord.phantom | (childData != null)){
                    data[association.name].push(childData);
                    record.setDirty();
                }
            }, me);

            /*
             * Iterate over all the removed records and add them to the preparedData. Set a flag on them to show that
             * they are to be deleted
             */
            Ext.each(childStore.removed, function(removedChildRecord) {
                //Set a flag here to identify removed records
                removedChildRecord.set('forDeletion', true);
                var removedChildData = this.getRecordData.call(this, removedChildRecord);
                data[association.name].push(removedChildData);
                record.setDirty();
            }, me);
        }

        //Only return data if it was dirty, new or marked for deletion.
        if (record.dirty | record.phantom | record.get('forDeletion')){
            return data;
        } 
    }
});
