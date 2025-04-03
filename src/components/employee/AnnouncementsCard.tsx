
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const announcements = [
  {
    id: 1,
    title: "Company Picnic",
    date: "April 15, 2025",
    content: "Join us for our annual company picnic at Central Park. Food and games provided!",
  },
  {
    id: 2,
    title: "New Health Benefits",
    date: "March 28, 2025",
    content: "We've updated our health insurance policy. Check your email for details.",
  },
  {
    id: 3,
    title: "Office Closure",
    date: "March 20, 2025",
    content: "The office will be closed on April 10th for building maintenance.",
  },
];

const AnnouncementsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Company Announcements</CardTitle>
          <Button variant="outline" size="sm">View All</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={announcement.id}>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{announcement.title}</h4>
                <span className="text-xs text-muted-foreground">{announcement.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{announcement.content}</p>
            </div>
            {index < announcements.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AnnouncementsCard;
