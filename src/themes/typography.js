export default function themeTypography(theme) {
    return {
        h6: {
            fontWeight: 400,
            color: theme.heading,
            fontSize: '1.25rem',
            lineHeight: '1.6',
            letterSpacing: '.0075em',
        },
        h5: {
            fontSize: '1.5rem',
            color: theme.heading,
            lineHeight: '1.334',
            letterSpacing: '0',
            fontWeight: 400,
        },
        h4: {
            fontSize: '2.125rem',
            lineHeight: '1.235',
            letterSpacing: '00735em',
            color: theme.heading,
            fontWeight: 400,
        },
        h3: {
            fontSize: '3rem',
            lineHeight: '1.167',
            letterSpacing: '0',
            color: theme.heading,
            fontWeight: 400,
        },
        h2: {
            fontSize: '3.75em',
            lineHeight: '1.2',
            color: theme.heading,
            fontWeight: 300,
        },
        h1: {
            fontSize: '6rem',
            lineHeight: '1.167',
            color: theme.heading,
            fontWeight: 300,
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.textDark,
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.darkTextSecondary,
        },
        caption: {
            fontSize: '0.75rem',
            lineHeight: '1.66',
            color: theme.darkTextPrimary,
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.334em',
            color: theme.darkTextPrimary,
        },
        body2: {
            fontSize: '.875rem',
            letterSpacing: '.01071em',
            fontWeight: 400,
            lineHeight: '1.43em',
            color: theme.darkTextPrimary,
        },
        button: {
            // textTransform: 'capitalize',
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: theme.grey500,
                '&[data-shrink="false"]': {
                    top: 5,
                },
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important',
            },
            '& legend': {
                display: 'none',
            },
            '& fieldset': {
                top: 0,
            },
        },
        mainContent: {
            backgroundColor: theme.background,
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `${theme?.customization?.borderRadius}px`,
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.heading,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px',
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: 'capitalize',
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px',
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem',
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem',
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem',
        },
    };
}
