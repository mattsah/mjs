#
# This a percy package. The `version` key is intentionally missing to
# break nimble. To install:
#
# - Install Percy (see: https://github.com/mattsah/percy)
# - percy install
# - nim build
#

author = "Matthew J. Sahagian"
binDir = "bin"
bin = @[
  "app"
]

requires "nim >= 2.2.6"
requires "dotenv >= 2.0.0"
requires "mininim/core"
requires "mininim/cli"
requires "mininim/web"
requires "smtp"
requires "valido@1f7642ff05090a5ea8a1423dd8a6ffb26d851e53"
