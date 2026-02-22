import { useLanguage } from '../../contexts/LanguageContext';
import type { ComplaintStatus } from '../../backend';

interface ComplaintStatusTimelineProps {
  statusHistory: ComplaintStatus[];
}

export default function ComplaintStatusTimeline({ statusHistory }: ComplaintStatusTimelineProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      {statusHistory.map((status, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
            {index < statusHistory.length - 1 && <div className="w-0.5 h-full bg-border mt-1" />}
          </div>
          <div className="pb-4">
            <p className="font-medium">
              {t(`status${status.charAt(0).toUpperCase() + status.slice(1)}`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
