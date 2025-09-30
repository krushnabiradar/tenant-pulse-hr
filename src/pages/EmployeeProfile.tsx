import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Calendar, Briefcase, Edit } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EmployeeProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <DashboardLayout variant="employee" title="My Profile">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Profile</h1>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile}>Save Changes</Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <p className="text-muted-foreground">Software Engineer</p>
                  <p className="text-sm text-muted-foreground">Engineering Department</p>
                </div>
                {isEditing && (
                  <Button variant="outline" className="w-full">
                    Change Photo
                  </Button>
                )}
                <div className="w-full pt-4 border-t">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>john.doe@company.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>New York, NY</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Joined Jan 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                {isEditing ? "Update your personal information" : "Your personal details and work information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="work">Work</TabsTrigger>
                  <TabsTrigger value="emergency">Emergency</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        defaultValue="John" 
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        defaultValue="Doe" 
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      defaultValue="john.doe@company.com" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      defaultValue="+1 (555) 123-4567" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      defaultValue="123 Main St, New York, NY 10001" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input 
                        id="dob" 
                        type="date" 
                        defaultValue="1990-01-15" 
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Input 
                        id="gender" 
                        defaultValue="Male" 
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="work" className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input 
                      id="employeeId" 
                      defaultValue="EMP001234" 
                      disabled
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="position">Position</Label>
                    <Input 
                      id="position" 
                      defaultValue="Software Engineer" 
                      disabled
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Input 
                      id="department" 
                      defaultValue="Engineering" 
                      disabled
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="manager">Reporting Manager</Label>
                    <Input 
                      id="manager" 
                      defaultValue="Jane Smith" 
                      disabled
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="joinDate">Join Date</Label>
                      <Input 
                        id="joinDate" 
                        type="date" 
                        defaultValue="2022-01-15" 
                        disabled
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="employmentType">Employment Type</Label>
                      <Input 
                        id="employmentType" 
                        defaultValue="Full Time" 
                        disabled
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="emergency" className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="emergencyName">Emergency Contact Name</Label>
                    <Input 
                      id="emergencyName" 
                      defaultValue="Jane Doe" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Input 
                      id="relationship" 
                      defaultValue="Spouse" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="emergencyPhone">Contact Number</Label>
                    <Input 
                      id="emergencyPhone" 
                      type="tel" 
                      defaultValue="+1 (555) 987-6543" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="emergencyEmail">Email Address</Label>
                    <Input 
                      id="emergencyEmail" 
                      type="email" 
                      defaultValue="jane.doe@email.com" 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="emergencyAddress">Address</Label>
                    <Input 
                      id="emergencyAddress" 
                      defaultValue="123 Main St, New York, NY 10001" 
                      disabled={!isEditing}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeProfile;