
Nim already has a handful of package managers.  There's the relatively "official" and idiomatic package manager called [nimble](#), as well a the "less official" but still establishment supported [atlas](#).  Within the broader developer community there's more still.  [Nimby](#) is written by the same developer (treeform) that provides many other well-loved packages.  And another prolific, but less recognized developer (xTrayambak) has [neo](#).  With all these options, it might be hard to understand why someone would take a 2 week diversion from other work to create _yet another_.

Aside from the most obvious point, namely that writing a package manager could be fun and a new learning experience, I'd be remiss not to mention my absolute frustration and struggle with the existing options up until this point.  I have no problems admitting that these may be issues unique to me, my particular development patterns, my existing familiarity with [composer](#) for PHP, and a general expectation that words have meaning.  Beyond the generalizations, however, the root of these problems can be traced generally to a set of core (and common issues):

1. Over-reliance on self-reported package names.
2. VCS-independent versioning mechanisms.
3. Aggressive caching and attempts to improve performance.

