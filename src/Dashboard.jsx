
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Monitor, CalendarDays, UploadCloud, Play } from "lucide-react";

export default function Dashboard() {
  const screens = [
    { id: 1, name: "Times Square LED", location: "NYC, USA", status: "Online" },
    { id: 2, name: "Mumbai Mall Billboard", location: "Mumbai, India", status: "Offline" },
    { id: 3, name: "Dubai Mall LED", location: "Dubai, UAE", status: "Online" },
    { id: 4, name: "London Street Display", location: "London, UK", status: "Online" },
    { id: 5, name: "Tokyo Shibuya Screen", location: "Tokyo, Japan", status: "Offline" },
  ];

  const contentLibrary = [
    { id: 1, title: "Summer Sale Video", duration: "00:30s" },
    { id: 2, title: "New Launch Banner", duration: "Static" },
    { id: 3, title: "Festival Promo", duration: "00:45s" },
    { id: 4, title: "Brand Story Ad", duration: "01:00s" },
  ];

  const handleUpload = () => {
    alert("Media uploaded successfully!");
  };

  const handleSchedule = (title) => {
    alert(`${title} scheduled successfully!`);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Screen Overview</h2>
          {screens.map(screen => (
            <div key={screen.id} className="flex items-center justify-between py-2 border-b">
              <div>
                <div className="font-medium flex items-center"><Monitor className="w-4 h-4 mr-2" /> {screen.name}</div>
                <div className="text-sm text-muted-foreground flex items-center"><MapPin className="w-3 h-3 mr-1" /> {screen.location}</div>
              </div>
              <div className={\`text-sm font-bold \${screen.status === 'Online' ? 'text-green-600' : 'text-red-500'}\`}>{screen.status}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Content Library</h2>
            <Button variant="outline" onClick={handleUpload} className="flex items-center gap-1 text-sm"><UploadCloud className="w-4 h-4" /> Upload Media</Button>
          </div>
          {contentLibrary.map(content => (
            <div key={content.id} className="flex justify-between items-center py-2 border-b">
              <div>
                <div className="font-medium">{content.title}</div>
                <div className="text-sm text-muted-foreground">Duration: {content.duration}</div>
              </div>
              <Button size="sm" onClick={() => handleSchedule(content.title)} className="flex items-center gap-1"><Play className="w-3 h-3" /> Schedule</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Upcoming Schedules</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <CalendarDays className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Times Square LED</p>
                <p className="text-sm text-muted-foreground">Summer Sale Video – 9:00 AM to 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CalendarDays className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Dubai Mall LED</p>
                <p className="text-sm text-muted-foreground">Festival Promo – 3:00 PM to 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CalendarDays className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">London Street Display</p>
                <p className="text-sm text-muted-foreground">Brand Story Ad – 6:00 PM to 7:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
