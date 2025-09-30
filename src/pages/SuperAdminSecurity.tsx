import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, Lock, Key, AlertTriangle, CheckCircle, Users, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SuperAdminSecurity = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Security settings have been updated successfully.",
    });
  };

  return (
    <DashboardLayout variant="super-admin" title="Security Settings">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Security & Compliance</h1>
          <Button onClick={handleSaveSettings}>Save Settings</Button>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Security Alert</AlertTitle>
          <AlertDescription>
            3 potential security issues detected. Review the security recommendations below.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Authentication Settings
              </CardTitle>
              <CardDescription>Configure authentication and access control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="mfa">Two-Factor Authentication (2FA)</Label>
                <Switch id="mfa" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sso">Single Sign-On (SSO)</Label>
                <Switch id="sso" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="biometric">Biometric Authentication</Label>
                <Switch id="biometric" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session">Session Timeout (minutes)</Label>
                <Input id="session" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="attempts">Max Login Attempts</Label>
                <Input id="attempts" type="number" defaultValue="5" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Password Policy
              </CardTitle>
              <CardDescription>Set password requirements for all users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="min-length">Minimum Password Length</Label>
                <Input id="min-length" type="number" defaultValue="12" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="uppercase">Require Uppercase Letters</Label>
                <Switch id="uppercase" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="numbers">Require Numbers</Label>
                <Switch id="numbers" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="special">Require Special Characters</Label>
                <Switch id="special" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Password Expiry (days)</Label>
                <Input id="expiry" type="number" defaultValue="90" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Security
              </CardTitle>
              <CardDescription>Configure API access and rate limiting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="api-auth">Require API Authentication</Label>
                <Switch id="api-auth" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate-limit">Rate Limit (requests/minute)</Label>
                <Input id="rate-limit" type="number" defaultValue="100" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="ip-whitelist">Enable IP Whitelisting</Label>
                <Switch id="ip-whitelist" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-expiry">API Token Expiry (hours)</Label>
                <Input id="token-expiry" type="number" defaultValue="24" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Network Security
              </CardTitle>
              <CardDescription>Network and infrastructure protection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="firewall">Enable Firewall</Label>
                <Switch id="firewall" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="ddos">DDoS Protection</Label>
                <Switch id="ddos" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="ssl">Force SSL/TLS</Label>
                <Switch id="ssl" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="vpn">Require VPN Access</Label>
                <Switch id="vpn" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Security Status</CardTitle>
            <CardDescription>Current security posture and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">All system patches are up to date</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">SSL certificates are valid</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">3 users haven't changed passwords in 90+ days</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">5 inactive user accounts detected</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">No suspicious login attempts in the last 24 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SuperAdminSecurity;