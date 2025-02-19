
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Topic } from "@/data/dsaTopics";

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard = ({ topic }: TopicCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-2xl">{topic.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {topic.content.map((paragraph, index) => (
          <p key={index} className="text-gray-700 whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};
