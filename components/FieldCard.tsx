import { styled } from '@mui/material';

const Root = styled('div')`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 80px 0;
    .title {
        font-size: 26px;
        font-weight: 300;
        margin-bottom: 16px;
    }
    .content {
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 16px;
    }
`
type FieldCardProps = {
    title: string,
    children: React.ReactNode
}

function FieldCard ({ title, children }: FieldCardProps): JSX.Element {
    return (
        <Root>
            <div className="title">{title}</div>
            <div className="content">{children}</div>
        </Root>
    )
}

export default FieldCard