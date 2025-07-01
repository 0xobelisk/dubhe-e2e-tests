#[allow(lint(share_owned))]module example::genesis {

  use sui::clock::Clock;

  use dubhe::dapp_service::{Self, DappHub};

  use example::dapp_key;

  public entry fun run(dapp_hub: &mut DappHub, clock: &Clock, ctx: &mut TxContext) {
    // Create Dapp
    let dapp_key = dapp_key::new();
    dapp_service::create_dapp(dapp_hub, dapp_key, b"example", b"example", clock, ctx);
    // Register tables
    // Logic that needs to be automated once the contract is deployed
    example::deploy_hook::run(dapp_hub, ctx);
  }
}
