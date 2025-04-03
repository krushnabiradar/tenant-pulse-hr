
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const recentPayslips = [
  {
    id: "PSL-2025-03",
    period: "March 2025",
    date: "01/04/2025",
    amount: "$3,500.00",
    status: "Paid",
  },
  {
    id: "PSL-2025-02",
    period: "February 2025",
    date: "01/03/2025",
    amount: "$3,500.00",
    status: "Paid",
  },
  {
    id: "PSL-2025-01",
    period: "January 2025",
    date: "01/02/2025",
    amount: "$3,400.00", 
    status: "Paid",
  },
];

const PayslipCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Recent Payslips</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPayslips.map((payslip) => (
              <TableRow key={payslip.id}>
                <TableCell className="font-medium">{payslip.id}</TableCell>
                <TableCell>{payslip.period}</TableCell>
                <TableCell>{payslip.date}</TableCell>
                <TableCell>{payslip.amount}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PayslipCard;
