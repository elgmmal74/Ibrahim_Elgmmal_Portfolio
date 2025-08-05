# Security Policy

## Supported Versions

This project is a static website portfolio. Security updates are provided for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio website, please report it responsibly:

### How to Report

1. **Email**: Send details to [ibrahimw319@gmail.com](mailto:ibrahimw319@gmail.com)
2. **Subject**: Use "Security Vulnerability Report - Web Portfolio"
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 1 week
- **Resolution**: Depends on severity and complexity
- **Credit**: You'll be credited in the fix (unless you prefer anonymity)

### Security Considerations

This is a static website with:
- No server-side processing
- No user data collection
- No authentication system
- Client-side JavaScript only

Common security concerns:
- XSS prevention in dynamic content
- Secure external links (rel="noopener noreferrer")
- Content Security Policy headers (when deployed)
- HTTPS enforcement

## Best Practices

When contributing:
- Sanitize any user inputs
- Use secure coding practices
- Avoid inline scripts when possible
- Keep dependencies minimal and updated
- Follow OWASP guidelines

Thank you for helping keep this project secure!
