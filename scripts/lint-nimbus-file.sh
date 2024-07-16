#!/usr/bin/env bash

TARGET_PATH=/tmp/nimbus-cli
NIMBUS_INSTALL_REMOTE_PATH=https://raw.githubusercontent.com/mozilla/application-services/main/install-nimbus-cli.sh
NIMBUS_INSTALL_LOCAL_PATH=$TARGET_PATH/install.sh

if [ -d $TARGET_PATH ]; then
  echo "Directory for \`nimbus-cli\` already exists: $TARGET_PATH"
else
  echo "Create directory for \`nimbus-cli\`: $TARGET_PATH"
  mkdir -p $TARGET_PATH

  echo "Download \`nimbus-cli\` installer from $NIMBUS_INSTALL_REMOTE_PATH to $TARGET_PATH"
  curl --proto '=https' --tlsv1.2 -sSf -o "$NIMBUS_INSTALL_LOCAL_PATH" "$NIMBUS_INSTALL_REMOTE_PATH"

  echo "Install \`nimbus-cli\`"
  bash $NIMBUS_INSTALL_LOCAL_PATH --directory $TARGET_PATH
fi

echo "Lint nimbus.yaml"
$TARGET_PATH/nimbus-cli fml -- validate config/nimbus.yaml
