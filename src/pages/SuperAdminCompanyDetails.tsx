import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Building2, Users, Calendar, CreditCard, Mail, Phone } from "lucide-react";

const SuperAdminCompanyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, fetch based on id
  const company = {
    id: id,
    name: "Acme Corporation",
    industry: "Manufacturing",
    employees: 120,
    plan: "Enterprise",
    status: "active",
    joinedDate: "2023-10-15",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, City, State 12345",
    hrAdmin: {
      name: "John Doe",
      email: "john.doe@acme.com",
      phone: "+1 (555) 987-6543",
    },
    subscription: {
      plan: "Enterprise",
      status: "active",
      amount: "$299/month",
      nextBilling: "2024-11-15",
    }
  };

  return (
    <DashboardLayout variant="super-admin" title="Company Details">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/super-admin/companies")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{company.name}</h2>
            <p className="text-muted-foreground">{company.industry}</p>
          </div>
          <Badge
            variant="outline"
            className={
              company.status === "active"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-gray-100 text-gray-800"
            }
          >
            {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
          </Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Company Name</p>
                <p className="font-medium">{company.name}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Industry</p>
                <p className="font-medium">{company.industry}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Number of Employees</p>
                <p className="font-medium">{company.employees}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{company.email}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{company.phone}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{company.address}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Joined Date</p>
                <p className="font-medium">
                  {new Date(company.joinedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="pt-2">
                <Button
                  className="w-full"
                  onClick={() => navigate(`/super-admin/companies/${id}/edit`)}
                >
                  Edit Company Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* HR Admin Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                HR Administrator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{company.hrAdmin.name}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {company.hrAdmin.email}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {company.hrAdmin.phone}
                </p>
              </div>
              <div className="pt-2">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => navigate(`/super-admin/employees?company=${id}`)}
                >
                  View All Employees
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Subscription Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Plan</p>
                <p className="font-medium">{company.subscription.plan}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge
                  variant="outline"
                  className="bg-emerald-100 text-emerald-800"
                >
                  {company.subscription.status}
                </Badge>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="font-medium">{company.subscription.amount}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">Next Billing Date</p>
                <p className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  {new Date(company.subscription.nextBilling).toLocaleDateString()}
                </p>
              </div>
              <div className="pt-2">
                <Button
                  className="w-full"
                  onClick={() => navigate(`/super-admin/companies/${id}/subscription`)}
                >
                  Manage Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                className="w-full"
                variant="outline"
                onClick={() => navigate(`/super-admin/companies/${id}/edit`)}
              >
                Edit Company Details
              </Button>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => navigate(`/super-admin/employees?company=${id}`)}
              >
                View Employees
              </Button>
              <Button className="w-full" variant="outline">
                View Activity Logs
              </Button>
              <Separator />
              <Button className="w-full" variant="destructive">
                Suspend Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminCompanyDetails;
