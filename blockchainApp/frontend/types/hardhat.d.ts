/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "MyERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyERC20__factory>;
    getContractFactory(
      name: "MyERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyERC721__factory>;
    getContractFactory(
      name: "MyToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyToken__factory>;
    getContractFactory(
      name: "Conduit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Conduit__factory>;
    getContractFactory(
      name: "ConduitController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConduitController__factory>;
    getContractFactory(
      name: "AmountDerivationErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AmountDerivationErrors__factory>;
    getContractFactory(
      name: "ConduitControllerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConduitControllerInterface__factory>;
    getContractFactory(
      name: "ConduitInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConduitInterface__factory>;
    getContractFactory(
      name: "ConsiderationEventsAndErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConsiderationEventsAndErrors__factory>;
    getContractFactory(
      name: "ConsiderationInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConsiderationInterface__factory>;
    getContractFactory(
      name: "CriteriaResolutionErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CriteriaResolutionErrors__factory>;
    getContractFactory(
      name: "FulfillmentApplicationErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FulfillmentApplicationErrors__factory>;
    getContractFactory(
      name: "ReentrancyErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyErrors__factory>;
    getContractFactory(
      name: "SignatureVerificationErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignatureVerificationErrors__factory>;
    getContractFactory(
      name: "TokenTransferrerErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenTransferrerErrors__factory>;
    getContractFactory(
      name: "ZoneInteractionErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZoneInteractionErrors__factory>;
    getContractFactory(
      name: "AmountDeriver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AmountDeriver__factory>;
    getContractFactory(
      name: "Assertions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Assertions__factory>;
    getContractFactory(
      name: "BasicOrderFulfiller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicOrderFulfiller__factory>;
    getContractFactory(
      name: "Consideration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Consideration__factory>;
    getContractFactory(
      name: "ConsiderationBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConsiderationBase__factory>;
    getContractFactory(
      name: "CounterManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CounterManager__factory>;
    getContractFactory(
      name: "CriteriaResolution",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CriteriaResolution__factory>;
    getContractFactory(
      name: "Executor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Executor__factory>;
    getContractFactory(
      name: "FulfillmentApplier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FulfillmentApplier__factory>;
    getContractFactory(
      name: "GettersAndDerivers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GettersAndDerivers__factory>;
    getContractFactory(
      name: "OrderCombiner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OrderCombiner__factory>;
    getContractFactory(
      name: "OrderFulfiller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OrderFulfiller__factory>;
    getContractFactory(
      name: "OrderValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OrderValidator__factory>;
    getContractFactory(
      name: "ReentrancyGuard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuard__factory>;
    getContractFactory(
      name: "SignatureVerification",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignatureVerification__factory>;
    getContractFactory(
      name: "TokenTransferrer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenTransferrer__factory>;
    getContractFactory(
      name: "Verifiers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifiers__factory>;
    getContractFactory(
      name: "ZoneInteraction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZoneInteraction__factory>;
    getContractFactory(
      name: "Seaport",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Seaport__factory>;

    getContractAt(
      name: "AccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IERC4906",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "MyERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyERC20>;
    getContractAt(
      name: "MyERC721",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyERC721>;
    getContractAt(
      name: "MyToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MyToken>;
    getContractAt(
      name: "Conduit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Conduit>;
    getContractAt(
      name: "ConduitController",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConduitController>;
    getContractAt(
      name: "AmountDerivationErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AmountDerivationErrors>;
    getContractAt(
      name: "ConduitControllerInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConduitControllerInterface>;
    getContractAt(
      name: "ConduitInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConduitInterface>;
    getContractAt(
      name: "ConsiderationEventsAndErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConsiderationEventsAndErrors>;
    getContractAt(
      name: "ConsiderationInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConsiderationInterface>;
    getContractAt(
      name: "CriteriaResolutionErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CriteriaResolutionErrors>;
    getContractAt(
      name: "FulfillmentApplicationErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FulfillmentApplicationErrors>;
    getContractAt(
      name: "ReentrancyErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyErrors>;
    getContractAt(
      name: "SignatureVerificationErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SignatureVerificationErrors>;
    getContractAt(
      name: "TokenTransferrerErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenTransferrerErrors>;
    getContractAt(
      name: "ZoneInteractionErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ZoneInteractionErrors>;
    getContractAt(
      name: "AmountDeriver",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AmountDeriver>;
    getContractAt(
      name: "Assertions",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Assertions>;
    getContractAt(
      name: "BasicOrderFulfiller",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BasicOrderFulfiller>;
    getContractAt(
      name: "Consideration",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Consideration>;
    getContractAt(
      name: "ConsiderationBase",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConsiderationBase>;
    getContractAt(
      name: "CounterManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CounterManager>;
    getContractAt(
      name: "CriteriaResolution",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.CriteriaResolution>;
    getContractAt(
      name: "Executor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Executor>;
    getContractAt(
      name: "FulfillmentApplier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FulfillmentApplier>;
    getContractAt(
      name: "GettersAndDerivers",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GettersAndDerivers>;
    getContractAt(
      name: "OrderCombiner",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OrderCombiner>;
    getContractAt(
      name: "OrderFulfiller",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OrderFulfiller>;
    getContractAt(
      name: "OrderValidator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OrderValidator>;
    getContractAt(
      name: "ReentrancyGuard",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuard>;
    getContractAt(
      name: "SignatureVerification",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SignatureVerification>;
    getContractAt(
      name: "TokenTransferrer",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenTransferrer>;
    getContractAt(
      name: "Verifiers",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifiers>;
    getContractAt(
      name: "ZoneInteraction",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ZoneInteraction>;
    getContractAt(
      name: "Seaport",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Seaport>;

    deployContract(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC4906>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721Enumerable>;
    deployContract(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721URIStorage>;
    deployContract(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Enumerable>;
    deployContract(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Metadata>;
    deployContract(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "MyERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyERC20>;
    deployContract(
      name: "MyERC721",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyERC721>;
    deployContract(
      name: "MyToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyToken>;
    deployContract(
      name: "Conduit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Conduit>;
    deployContract(
      name: "ConduitController",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConduitController>;
    deployContract(
      name: "AmountDerivationErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AmountDerivationErrors>;
    deployContract(
      name: "ConduitControllerInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConduitControllerInterface>;
    deployContract(
      name: "ConduitInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConduitInterface>;
    deployContract(
      name: "ConsiderationEventsAndErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConsiderationEventsAndErrors>;
    deployContract(
      name: "ConsiderationInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConsiderationInterface>;
    deployContract(
      name: "CriteriaResolutionErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CriteriaResolutionErrors>;
    deployContract(
      name: "FulfillmentApplicationErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FulfillmentApplicationErrors>;
    deployContract(
      name: "ReentrancyErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReentrancyErrors>;
    deployContract(
      name: "SignatureVerificationErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SignatureVerificationErrors>;
    deployContract(
      name: "TokenTransferrerErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TokenTransferrerErrors>;
    deployContract(
      name: "ZoneInteractionErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ZoneInteractionErrors>;
    deployContract(
      name: "AmountDeriver",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AmountDeriver>;
    deployContract(
      name: "Assertions",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Assertions>;
    deployContract(
      name: "BasicOrderFulfiller",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BasicOrderFulfiller>;
    deployContract(
      name: "Consideration",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Consideration>;
    deployContract(
      name: "ConsiderationBase",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConsiderationBase>;
    deployContract(
      name: "CounterManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CounterManager>;
    deployContract(
      name: "CriteriaResolution",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CriteriaResolution>;
    deployContract(
      name: "Executor",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Executor>;
    deployContract(
      name: "FulfillmentApplier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FulfillmentApplier>;
    deployContract(
      name: "GettersAndDerivers",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GettersAndDerivers>;
    deployContract(
      name: "OrderCombiner",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OrderCombiner>;
    deployContract(
      name: "OrderFulfiller",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OrderFulfiller>;
    deployContract(
      name: "OrderValidator",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OrderValidator>;
    deployContract(
      name: "ReentrancyGuard",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReentrancyGuard>;
    deployContract(
      name: "SignatureVerification",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SignatureVerification>;
    deployContract(
      name: "TokenTransferrer",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TokenTransferrer>;
    deployContract(
      name: "Verifiers",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Verifiers>;
    deployContract(
      name: "ZoneInteraction",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ZoneInteraction>;
    deployContract(
      name: "Seaport",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Seaport>;

    deployContract(
      name: "AccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "IAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IERC4906",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC4906>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "ERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721>;
    deployContract(
      name: "ERC721Enumerable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721Enumerable>;
    deployContract(
      name: "ERC721URIStorage",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC721URIStorage>;
    deployContract(
      name: "IERC721Enumerable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Enumerable>;
    deployContract(
      name: "IERC721Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Metadata>;
    deployContract(
      name: "IERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721>;
    deployContract(
      name: "IERC721Receiver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Receiver>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "MyERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyERC20>;
    deployContract(
      name: "MyERC721",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyERC721>;
    deployContract(
      name: "MyToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MyToken>;
    deployContract(
      name: "Conduit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Conduit>;
    deployContract(
      name: "ConduitController",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConduitController>;
    deployContract(
      name: "AmountDerivationErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AmountDerivationErrors>;
    deployContract(
      name: "ConduitControllerInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConduitControllerInterface>;
    deployContract(
      name: "ConduitInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConduitInterface>;
    deployContract(
      name: "ConsiderationEventsAndErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConsiderationEventsAndErrors>;
    deployContract(
      name: "ConsiderationInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConsiderationInterface>;
    deployContract(
      name: "CriteriaResolutionErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CriteriaResolutionErrors>;
    deployContract(
      name: "FulfillmentApplicationErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FulfillmentApplicationErrors>;
    deployContract(
      name: "ReentrancyErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReentrancyErrors>;
    deployContract(
      name: "SignatureVerificationErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SignatureVerificationErrors>;
    deployContract(
      name: "TokenTransferrerErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TokenTransferrerErrors>;
    deployContract(
      name: "ZoneInteractionErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ZoneInteractionErrors>;
    deployContract(
      name: "AmountDeriver",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AmountDeriver>;
    deployContract(
      name: "Assertions",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Assertions>;
    deployContract(
      name: "BasicOrderFulfiller",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BasicOrderFulfiller>;
    deployContract(
      name: "Consideration",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Consideration>;
    deployContract(
      name: "ConsiderationBase",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConsiderationBase>;
    deployContract(
      name: "CounterManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CounterManager>;
    deployContract(
      name: "CriteriaResolution",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.CriteriaResolution>;
    deployContract(
      name: "Executor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Executor>;
    deployContract(
      name: "FulfillmentApplier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FulfillmentApplier>;
    deployContract(
      name: "GettersAndDerivers",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GettersAndDerivers>;
    deployContract(
      name: "OrderCombiner",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OrderCombiner>;
    deployContract(
      name: "OrderFulfiller",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OrderFulfiller>;
    deployContract(
      name: "OrderValidator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OrderValidator>;
    deployContract(
      name: "ReentrancyGuard",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReentrancyGuard>;
    deployContract(
      name: "SignatureVerification",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SignatureVerification>;
    deployContract(
      name: "TokenTransferrer",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TokenTransferrer>;
    deployContract(
      name: "Verifiers",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Verifiers>;
    deployContract(
      name: "ZoneInteraction",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ZoneInteraction>;
    deployContract(
      name: "Seaport",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Seaport>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
