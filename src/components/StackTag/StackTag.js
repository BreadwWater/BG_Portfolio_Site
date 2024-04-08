import './StackTag.scss';

function StackTag(props) {
    const { tag } = props;

    return (
        <>
            <article className='stacktag'>
                <p className='stacktag--title'>{tag}</p>
            </article>
        </>
    );
}

export default StackTag;