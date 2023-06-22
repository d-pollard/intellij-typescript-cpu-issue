# Backstory

IntelliJ has had some type of CPU bug while trying to parse mildly complex Typescript types for about a year now. Its an IDE & machine stopper. I've personally seen spikes up to 800+%. The Jetbrains team has been less than responsive on this issue and it seems like there is no urgency to fix it.

This bug is actively making my development experience miserable.

This repo is to serve as a way for anyone else to verify the bug and hopefully, for the Jetbrains team to fix it.

I want to stress that I DON'T WANT TO SWITCH EDITORS. But I'm at my witts end and this needs fixed.

# Related JetBrains Bugs
- https://youtrack.jetbrains.com/issue/WEB-52943/Meta-High-CPU-usage-on-resolve-or-types-evaluation-in-TypeScript
- https://youtrack.jetbrains.com/issue/WEB-58343/IntelliJ-hogs-1000-CPU-during-inspections-on-JS-TS-resolve
- https://youtrack.jetbrains.com/issue/WEB-55350/High-CPU-usage-on-evaluating-generics
- https://youtrack.jetbrains.com/issue/WEB-57921/TypeScript-Memory-leak-and-high-CPU-when-overloads-are-generated-via-call-signature-intersection
- https://youtrack.jetbrains.com/issue/WEB-59058/Plugin-JavaScript-and-TypeScript-high-cpu-slow-TypeScriptConditionalTypeJSTypeImpl.substitute

There's a lot more, but I think you get the point


# Run
```shell
git clone git@github.com:d-pollard/intellij-typescript-cpu-issue.git
cd intellij-typescript-cpu-issue
yarn install
idea .
```

Then, open your editor to the src/main.tsx file and watch your CPU skyrocket

## IntelliJ Information
```text
IntelliJ IDEA 2023.1.2 (Ultimate Edition)
Build #IU-231.9011.34, built on May 16, 2023
Runtime version: 17.0.6+10-b829.9 aarch64
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
macOS 13.3.1
GC: G1 Young Generation, G1 Old Generation
Memory: 8048M
Cores: 10
Metal Rendering is ON
Registry:
debugger.new.tool.window.layout=true
ide.experimental.ui=true

Non-Bundled Plugins:
awesome.console (0.1337.12)
org.intellij.prisma (231.9011.4)
com.intellij.lang.jsgraphql (4.0.1)
Pythonid (231.9011.34)
net.ashald.envfile (3.4.1)
zielu.gittoolbox (500.0.8+213)
com.jetbrains.php (231.9011.38)
org.jetbrains.plugins.phpstorm-remote-interpreter (231.8770.17)
org.jetbrains.plugins.phpstorm-docker (231.8109.90)
ru.adelf.idea.dotenv (2023.1)
com.jetbrains.php.blade (231.9011.38)
com.laravel_idea.plugin (7.1.1.231)

Kotlin: 231-1.8.21-IJ9011.34
```
