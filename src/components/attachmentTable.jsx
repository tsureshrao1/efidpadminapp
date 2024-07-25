import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { downloadAttachmentFile } from '../services/apiService';


const AttachmentTable = ({ attachments , onDelete,showDelete = true}) => {

    const downloadAttachment = async (attachment) => {
      const response = await downloadAttachmentFile(attachment);
      // const blob = response.blob();
      const url = window.URL.createObjectURL(
        new Blob([response], {
          type: "application/octet-stream",
        })
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        attachment.attachmentName
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    }

    const attachmentLink = (attachment) => {
      return <a href="javascript: void(0)" onClick={() => {downloadAttachment(attachment)}}>{attachment.attachmentName}</a>;
    };

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
        <Column body={attachmentLink} header="Attachment Name"></Column>
        {
            showDelete && 
            <Column body={deleteAttachment} header="Delete" style={{ textAlign: 'center', width: '8em' }}></Column>
        }
      </DataTable>
    </div>
  );
};

export default AttachmentTable;