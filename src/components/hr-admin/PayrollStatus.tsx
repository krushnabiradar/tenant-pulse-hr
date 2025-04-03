
import { DollarSign, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const PayrollStatus = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Payroll Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current Period</TabsTrigger>
            <TabsTrigger value="previous">Previous Period</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-sm font-medium text-muted-foreground">Current Period</div>
                <div className="text-lg font-semibold flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                  Apr 1 - Apr 30, 2025
                </div>
              </div>
              <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                Processing
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div className="bg-muted p-3 rounded-md space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">Total Salary</span>
                </div>
                <span className="font-semibold">$48,500.00</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">Total Bonus</span>
                </div>
                <span className="font-semibold">$3,200.00</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">Total Deductions</span>
                </div>
                <span className="font-semibold">$6,420.00</span>
              </div>
              
              <div className="border-t pt-2 flex justify-between items-center font-bold">
                <span>Net Payable</span>
                <span>$45,280.00</span>
              </div>
            </div>
            
            <Button className="w-full">Process Payroll</Button>
          </TabsContent>
          
          <TabsContent value="previous" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-sm font-medium text-muted-foreground">Previous Period</div>
                <div className="text-lg font-semibold flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                  Mar 1 - Mar 31, 2025
                </div>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                Completed
              </div>
            </div>
            
            <div className="bg-muted p-3 rounded-md space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">Total Salary</span>
                </div>
                <span className="font-semibold">$47,850.00</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">Total Bonus</span>
                </div>
                <span className="font-semibold">$2,150.00</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm font-medium">Total Deductions</span>
                </div>
                <span className="font-semibold">$6,320.00</span>
              </div>
              
              <div className="border-t pt-2 flex justify-between items-center font-bold">
                <span>Net Paid</span>
                <span>$43,680.00</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">View Payment History</Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PayrollStatus;
