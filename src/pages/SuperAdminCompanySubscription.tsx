import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import companiesData from "@/data/companies.json";
import billingHistoryData from "@/data/billingHistory.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, CreditCard, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SuperAdminCompanySubscription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fetch company data from JSON file based on id
  const company = companiesData.find(c => c.id === Number(id)) || companiesData[0];
  
  const subscription = {
    companyName: company.name,
    currentPlan: company.subscription.plan.toLowerCase(),
    status: company.subscription.status,
    amount: company.subscription.amount,
    billingCycle: company.subscription.billingCycle,
    nextBillingDate: company.subscription.nextBilling,
    startDate: company.subscription.startDate,
    paymentMethod: company.subscription.paymentMethod,
  };

  // Get billing history for this company
  const billingHistory = billingHistoryData.filter(bill => bill.companyId === Number(id));

  const handlePlanChange = () => {
    toast({
      title: "Plan Updated",
      description: "Subscription plan has been updated successfully.",
    });
  };

  const handleCancelSubscription = () => {
    toast({
      title: "Subscription Canceled",
      description: "The subscription will be canceled at the end of the billing period.",
      variant: "destructive",
    });
  };

  return (
    <DashboardLayout variant="super-admin" title="Manage Subscription">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/super-admin/companies/${id}`)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{subscription.companyName}</h2>
            <p className="text-muted-foreground">Subscription Management</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Current Plan */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">
                {subscription.currentPlan}
              </div>
              <p className="text-xs text-muted-foreground">
                <Badge
                  variant="outline"
                  className="mt-2 bg-emerald-100 text-emerald-800"
                >
                  {subscription.status}
                </Badge>
              </p>
            </CardContent>
          </Card>

          {/* Monthly Cost */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{subscription.amount}</div>
              <p className="text-xs text-muted-foreground">per month</p>
            </CardContent>
          </Card>

          {/* Next Billing */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Date(subscription.nextBillingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <p className="text-xs text-muted-foreground">
                {new Date(subscription.nextBillingDate).getFullYear()}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Update Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Change Subscription Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="plan">Select Plan</Label>
                <Select defaultValue={subscription.currentPlan}>
                  <SelectTrigger id="plan">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">
                      Starter - $99/month
                    </SelectItem>
                    <SelectItem value="professional">
                      Professional - $199/month
                    </SelectItem>
                    <SelectItem value="enterprise">
                      Enterprise - $299/month
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing">Billing Cycle</Label>
                <Select defaultValue={subscription.billingCycle}>
                  <SelectTrigger id="billing">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="annual">Annual (Save 20%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full" onClick={handlePlanChange}>
                Update Plan
              </Button>
            </CardContent>
          </Card>

          {/* Subscription Details */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium">
                  {new Date(subscription.startDate).toLocaleDateString()}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-medium">{subscription.paymentMethod}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Next Billing Date</p>
                <p className="font-medium">
                  {new Date(subscription.nextBillingDate).toLocaleDateString()}
                </p>
              </div>
              <Separator />
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleCancelSubscription}
              >
                Cancel Subscription
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Billing History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingHistory.map((bill) => (
                  <TableRow key={bill.id}>
                    <TableCell>
                      {new Date(bill.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="font-medium">{bill.invoice}</TableCell>
                    <TableCell>{bill.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-emerald-100 text-emerald-800"
                      >
                        {bill.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminCompanySubscription;
