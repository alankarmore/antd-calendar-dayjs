import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/lib/calendar/generateCalendar';

const Calendar = generateCalendar(dayjsGenerateConfig);

export default Calendar;