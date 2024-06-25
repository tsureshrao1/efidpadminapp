import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const AttachmentTable = ({ attachments , onDelete,showDelete = true}) => {

    const deleteAttachment = (rowData) => {
        return (
          <Button 
            icon="pi pi-trash" 
            className="p-button-danger" 
            onClick={(event) => onDelete(event, rowData)} 
          />
        );
      };

  return (
    <div>
      <DataTable value={attachments} responsiveLayout="scroll">
        <Column field="attachmentType" header="Attachment Type"></Column>
        <Column field="attachmentName" header="Attachment Name"></Column>
        {
            showDelete && 
            <Column body={deleteAttachment} header="Delete" style={{ textAlign: 'center', width: '8em' }}></Column>
        }       
      </DataTable>
    </div>
  );
};

export default AttachmentTable;