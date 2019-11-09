<script>
    import {
        Button, Card, CardBody, CardFooter, CardHeader,
        CardImg, CardSubtitle, CardText, CardTitle
    } from "sveltestrap";

    export let title;
    export let subtitle;
    export let text;
    export let footer;
</script>

<Card class="mb-3">
    <CardHeader>
        <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardBody>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>
            {text}
        </CardText>
        <Button>
            <slot name="button"></slot>
        </Button>
    </CardBody>
    <CardFooter>{footer}</CardFooter>
</Card>
