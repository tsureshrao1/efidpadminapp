import { Button } from "react-bootstrap"
import { useReactToPrint } from "react-to-print";

export default function PrintButton({printRef}) {
    const printTable = useReactToPrint({
        content: () => printRef.current,
        // print: async (printIframe) => {
        //     const document = printIframe.contentDocument;
        //     if (document) {
        //       const ticketElement = document.getElementsByClassName(printClass)[0];
        //       const options = {
        //         margin: 0,
        //         filename: `${printClass}.pdf`
        //       };
        //       const exporter = new Html2Pdf(ticketElement, options);
        //       options.download = false;
        //       await exporter.getPdf(options);
        //     }
        // },
    });
    return (
        <Button onClick={printTable}>
            <i className="fa fa-print"></i> Print
        </Button>
    )
}