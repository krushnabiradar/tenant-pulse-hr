import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AddCompanyDialog() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Here you would typically send the data to your backend
    console.log({
      company: {
        name: formData.get("companyName"),
        industry: formData.get("industry"),
        employees: formData.get("employees"),
        plan: formData.get("plan"),
      },
      hrAdmin: {
        firstName: formData.get("hrFirstName"),
        lastName: formData.get("hrLastName"),
        email: formData.get("hrEmail"),
        phone: formData.get("hrPhone"),
      }
    });

    toast({
      title: "Company Added",
      description: "New company and HR admin have been created successfully.",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8">
          <Building2 className="mr-2 h-3.5 w-3.5" />
          Add Company
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Company</DialogTitle>
          <DialogDescription>
            Create a new company and assign an HR administrator. Both will be set up simultaneously.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input 
                  id="companyName" 
                  name="companyName"
                  placeholder="Acme Corporation" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select name="industry" required>
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="employees">Number of Employees *</Label>
                <Input 
                  id="employees" 
                  name="employees"
                  type="number" 
                  placeholder="50" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Subscription Plan *</Label>
                <Select name="plan" required>
                  <SelectTrigger id="plan">
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* HR Admin Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">HR Administrator</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hrFirstName">First Name *</Label>
                <Input 
                  id="hrFirstName" 
                  name="hrFirstName"
                  placeholder="John" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hrLastName">Last Name *</Label>
                <Input 
                  id="hrLastName" 
                  name="hrLastName"
                  placeholder="Doe" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hrEmail">Email *</Label>
                <Input 
                  id="hrEmail" 
                  name="hrEmail"
                  type="email" 
                  placeholder="john.doe@company.com" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hrPhone">Phone Number</Label>
                <Input 
                  id="hrPhone" 
                  name="hrPhone"
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Company & HR Admin</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
