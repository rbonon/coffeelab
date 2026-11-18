# Issue and change workflow

[GitHub Project](https://github.com/users/rbonon/projects/8) tracks Stage, Status, and Milestone. Epics group work. Every implementation leaf has one issue, one `feat/<change-name>` branch, and one OpenSpec change. Use `rbo-create-change` to propose a leaf and `rbo-close-change` after user validation and explicit close-out approval.

Run `scripts/refresh-roadmap.sh` after issue changes to regenerate the local roadmap and issue hierarchy from GitHub. Use `rbo-handoff` at chat boundaries and `rbo-catch-up` to resume.

The [planning portal](https://rbonon.github.io/coffeelab/) is published from `main:/docs` through GitHub Pages. To preview it locally, run `python3 -m http.server --bind 127.0.0.1 --directory docs`.
