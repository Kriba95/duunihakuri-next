import Card from '@material-tailwind/react/components/Card';
import CardRow from '@material-tailwind/react/components/CardRow';
import CardHeader from '@material-tailwind/react/components/CardHeader';
import CardStatus from '@material-tailwind/react/components/CardStatus';
import CardStatusFooter from '@material-tailwind/react/components/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {
    return (
        <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color={color} iconOnly className="mb-0">
                        <Icon name={icon} size="3xl" color="white" />
                    </CardHeader>

                    <CardStatus title={title} amount={amount} />
                </CardRow>

                <CardStatusFooter
                    amount={percentage}
                    color={percentageColor}
                    date={date}
                >
                    <Icon color={percentageColor} name={percentageIcon} />
                </CardStatusFooter>
            </Card>
        </div>
    );
}