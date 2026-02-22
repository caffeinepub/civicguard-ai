# Specification

## Summary
**Goal:** Build CivicGuard AI, a full-stack civic tech reporting platform that enables citizens to report civic issues (garbage, tobacco spit, traffic violations, public nuisance) with image/video evidence, track complaint status, and engage with gamified civic participation features.

**Planned changes:**
- Implement user authentication with role-based access control (Citizen, Authority, Admin) using Internet Identity
- Create image and video upload system with automatic location and timestamp tagging for civic issue reporting
- Build complaint generation and status tracking system (Received, Under Review, Action Taken, Escalated)
- Implement anonymous reporting option
- Create real-time civic heatmap dashboard showing geographic distribution of issues
- Build area-wise civic score calculation system (cleanliness + discipline index)
- Implement gamified civic score system with user badges and city/school-level leaderboards
- Create volunteer and NGO task marketplace
- Build auto-escalation system with 72-hour reminder and higher authority escalation
- Implement RTI draft auto-generator for civic complaints
- Create before/after impact proof generator with visual comparison
- Add one-tap helpline integration (112, 1969, 103) with auto city municipal detection
- Implement multi-language support (Hindi and English)
- Create daily engagement features: 5-question civic quiz, daily civic fact, and daily moral story
- Add motivational video section for mature audiences
- Create dedicated tobacco spit-free public report section with awareness messaging
- Design mobile-first dark modern UI with clean layout
- Build REST API backend in single Motoko actor with stable storage

**User-visible outcome:** Users can register, report civic issues with photos/videos, track complaint status, view civic heatmaps, earn badges and compete on leaderboards, access volunteer opportunities, generate RTI drafts, compare before/after impact, access helplines, take daily civic quizzes, read educational content, and watch motivational videos - all in a dark-themed mobile-first interface available in Hindi and English.
