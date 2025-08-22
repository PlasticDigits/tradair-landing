/* global BigInt */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract, useWriteContract, useWatchBlockNumber, usePublicClient, useChainId } from 'wagmi';
import { parseEther, formatEther, erc20Abi } from 'viem';
import TRAKEN_SALE_ABI from '../constants/ABI/TrakenSaleV2.json';
import CHAINLINK_ORACLE_ABI from '../constants/ABI/ChainlinkPriceOracle.json';
import { SMART_CONTRACTS } from '../constants/smart-contracts';
import confetti from 'canvas-confetti';
import { useSpring, animated } from '@react-spring/web';
import {
  Container,
  Section,
  Flex,
  Card,
  Heading,
  Text,
  Badge,
  Progress,
  SegmentedControl,
  TextField,
  Button,
  Callout,
  Box,
    Grid,
} from '@radix-ui/themes';

const TRAKEN_PER_USD = 10000; // $1 buys 10,000 TRAKEN

function useSaleStaticData(accountAddress) {
  const saleAddress = SMART_CONTRACTS.TRAKEN_SALE;
  const {
    data: minDepositWad,
  } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'minDepositWad' });
  const {
    data: maxDepositWad,
  } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'maxDepositWad' });
  const { data: softcap } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'softcap' });
  const { data: hardcap } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'hardcap' });
  const { data: startEpoch } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'startEpoch' });
  const { data: endEpoch } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'endEpoch' });
  const { data: usdtAddress } = useReadContract({ address: saleAddress, abi: TRAKEN_SALE_ABI, functionName: 'USDT' });

  const { data: initialDepositedAmount, refetch: refetchDepositedAmount } = useReadContract({
    address: saleAddress,
    abi: TRAKEN_SALE_ABI,
    functionName: 'depositedAmount',
    args: [accountAddress ?? '0x0000000000000000000000000000000000000000'],
  });

  const { data: initialTotalDeposits, refetch: refetchTotalDeposits } = useReadContract({
    address: saleAddress,
    abi: TRAKEN_SALE_ABI,
    functionName: 'totalDeposits',
  });

  return {
    minDepositWad: minDepositWad ?? 0n,
    maxDepositWad: maxDepositWad ?? 0n,
    softcap: softcap ?? 0n,
    hardcap: hardcap ?? 0n,
    startEpoch: startEpoch ?? 0n,
    endEpoch: endEpoch ?? 0n,
    usdtAddress: usdtAddress ?? '0x0000000000000000000000000000000000000000',
    initialDepositedAmount: initialDepositedAmount ?? 0n,
    initialTotalDeposits: initialTotalDeposits ?? 0n,
    refetchDepositedAmount,
    refetchTotalDeposits,
  };
}

function formatUsdWei(wei) {
  const asNumber = Number(wei) / 1e18;
  if (!isFinite(asNumber)) return '$0';
  return `$${asNumber.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}

function formatPercent(n) {
  return `${n.toFixed(2)}%`;
}

function Countdown({ startEpoch, endEpoch, onOpen }) {
  const [nowMs, setNowMs] = useState(() => Date.now());
  const openedRef = useRef(false);

  useEffect(() => {
    let rafId;
    const tick = () => {
      setNowMs(Date.now());
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const nowSec = Math.floor(nowMs / 1000);
  const status = useMemo(() => {
    if (nowSec < Number(startEpoch)) return 'BEFORE';
    if (nowSec > Number(endEpoch)) return 'CLOSED';
    return 'OPEN';
  }, [nowSec, startEpoch, endEpoch]);

  useEffect(() => {
    if (status === 'OPEN' && !openedRef.current) {
      openedRef.current = true;
      onOpen?.();
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.25 }, scalar: 0.6 });
      } catch {}
    }
  }, [status, onOpen]);

  const targetSec = status === 'BEFORE' ? Number(startEpoch) : Number(endEpoch);
  const msLeft = Math.max(0, targetSec * 1000 - nowMs);
  const totalSeconds = Math.floor(msLeft / 1000);
  const days = Math.floor(totalSeconds / 86400)
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((totalSeconds % 86400) / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, '0');
  const millis = Math.floor(msLeft % 1000)
    .toString()
    .padStart(3, '0');

  return (
    <Flex direction="column" align="center" gap="2">
      {status === 'BEFORE' && (
        <>
          <Heading
            as="div"
            size="9"
            className="font-[Orbitron] tracking-widest text-glow-cyan tabular-nums countdown-title"
            style={{ display: 'flex', alignItems: 'baseline', columnGap: '0.15em' }}
          >
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{days}</span>
            </Box>
            <span>:</span>
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{hours}</span>
            </Box>
            <span>:</span>
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{minutes}</span>
            </Box>
            <span>:</span>
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{seconds}</span>
            </Box>
            <span>.</span>
            <Box asChild style={{ minWidth: '3ch', textAlign: 'center' }}>
              <span>{millis}</span>
            </Box>
          </Heading>
          <Text size="4" color="cyan" className="text-glow-cyan">Sale starts soon</Text>
        </>
      )}
      {status === 'OPEN' && (
        <>
          <Heading
            as="div"
            size="6"
            className="font-[Orbitron] tracking-widest tabular-nums countdown-title-small text-glow-pink"
            style={{ display: 'flex', alignItems: 'baseline', columnGap: '0.15em', color: '#FF00FF' }}
          >
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{days}</span>
            </Box>
            <span>:</span>
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{hours}</span>
            </Box>
            <span>:</span>
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{minutes}</span>
            </Box>
            <span>:</span>
            <Box asChild style={{ minWidth: '2ch', textAlign: 'center' }}>
              <span>{seconds}</span>
            </Box>
            <span>.</span>
            <Box asChild style={{ minWidth: '3ch', textAlign: 'center' }}>
              <span>{millis}</span>
            </Box>
          </Heading>
          <Text size="3" color="violet" className="text-glow-pink">Sale closes in</Text>
        </>
      )}
      {status === 'CLOSED' && null}
    </Flex>
  );
}

export default function TrakenSale() {
  const saleAddress = SMART_CONTRACTS.TRAKEN_SALE;
  const { address, isConnected, connector } = useAccount();
  const publicClient = usePublicClient();
  const chainId = useChainId();
  const isBsc = chainId === 56;
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

  const {
    minDepositWad,
    maxDepositWad,
    softcap,
    hardcap,
    startEpoch,
    endEpoch,
    usdtAddress,
    initialDepositedAmount,
    initialTotalDeposits,
    refetchDepositedAmount,
    refetchTotalDeposits,
  } = useSaleStaticData(address);

  const [totalDeposits, setTotalDeposits] = useState(initialTotalDeposits);
  const [userDeposited, setUserDeposited] = useState(initialDepositedAmount);

  useEffect(() => {
    setTotalDeposits(initialTotalDeposits);
  }, [initialTotalDeposits]);
  useEffect(() => {
    setUserDeposited(initialDepositedAmount);
  }, [initialDepositedAmount]);

  // watch new blocks to refresh dynamic values
  useWatchBlockNumber({
    onBlockNumber: async () => {
      const [td, ud] = await Promise.all([
        refetchTotalDeposits(),
        refetchDepositedAmount(),
      ]);
      if (td?.data !== undefined) setTotalDeposits(td.data);
      if (ud?.data !== undefined) setUserDeposited(ud.data);
    },
  });

  // BNB/USD price feed
  const [bnbPrice, setBnbPrice] = useState(0n);
  const [bnbPriceDecimals, setBnbPriceDecimals] = useState(8);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [decimals, round] = await Promise.all([
          publicClient.readContract({ address: SMART_CONTRACTS.CHAINLINK_BNB_USD_PRICE_ORACLE, abi: CHAINLINK_ORACLE_ABI, functionName: 'decimals' }),
          publicClient.readContract({ address: SMART_CONTRACTS.CHAINLINK_BNB_USD_PRICE_ORACLE, abi: CHAINLINK_ORACLE_ABI, functionName: 'latestRoundData' }),
        ]);
        const price = BigInt(round[1]);
        if (mounted) {
          setBnbPrice(price);
          setBnbPriceDecimals(Number(decimals));
        }
      } catch (e) {
        // ignore; will disable BNB calc
      }
    })();
    return () => {
      mounted = false;
    };
  }, [publicClient]);

  const [mode, setMode] = useState('USDT'); // 'USDT' | 'BNB'
  const [amountInput, setAmountInput] = useState('');
  const [error, setError] = useState('');
  const [txStatus, setTxStatus] = useState('idle');
  const [txHash, setTxHash] = useState('');

  // Balances
  const [usdtBalance, setUsdtBalance] = useState(0n);
  const [bnbBalance, setBnbBalance] = useState(0n);
  useEffect(() => {
    if (!address) return;
    let mounted = true;
    (async () => {
      try {
        const stablecoinAddress = usdtAddress;
        const [balUsdt, balBnb] = await Promise.all([
          publicClient.readContract({ address: stablecoinAddress, abi: erc20Abi, functionName: 'balanceOf', args: [address] }),
          publicClient.getBalance({ address }),
        ]);
        if (!mounted) return;
        setUsdtBalance(balUsdt ?? 0n);
        setBnbBalance(balBnb ?? 0n);
      } catch {}
    })();
    return () => {
      mounted = false;
    };
  }, [address, publicClient, usdtAddress]);

  const remainingPerWalletUsdWei = useMemo(() => {
    const remaining = maxDepositWad - (userDeposited ?? 0n);
    return remaining > 0n ? remaining : 0n;
  }, [maxDepositWad, userDeposited]);

  const percent = useMemo(() => {
    if (hardcap === 0n) return 0;
    const p = Number((totalDeposits * 10000n) / hardcap) / 100;
    return Math.max(0, Math.min(100, p));
  }, [totalDeposits, hardcap]);

  const userTraken = useMemo(() => {
    const usd = Number(userDeposited) / 1e18;
    return usd * TRAKEN_PER_USD;
  }, [userDeposited]);

  // Animated counters
  function AnimatedCounter({ value, format }) {
    const [spring, api] = useSpring(() => ({ val: 0 }));
    useEffect(() => {
      api.start({ val: value, from: { val: spring.val.get() } });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (
      <animated.span>
        {spring.val.to((v) => (typeof format === 'function' ? format(v) : v.toLocaleString()))}
      </animated.span>
    );
  }

  const formatUsdNumber = (n) => `$${n.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  const totalDepositsUsd = Number(totalDeposits) / 1e18;

  const { writeContractAsync } = useWriteContract();
  // BigInt ceil division helper
  function divCeil(a, b) {
    return (a + b - 1n) / b;
  }

  // Format BNB (wei) to string with exactly 4 decimals
  function formatBnbFixed4(wei, mode = 'floor') {
    const denominator = 1000000000000000000n; // 1e18
    const scale = 10000n; // 4 decimals
    let scaled;
    if (mode === 'ceil') {
      scaled = (wei * scale + (denominator - 1n)) / denominator;
    } else {
      scaled = (wei * scale) / denominator;
    }
    const intPart = scaled / scale;
    const fracPart = scaled % scale;
    const fracStr = fracPart.toString().padStart(4, '0');
    return `${intPart.toString()}.${fracStr}`;
  }

  // Compute slippage-aware BNB min/max bounds based on USD rules
  const bnbBounds = useMemo(() => {
    if (bnbPrice === 0n) return { minBnbWei: 0n, maxBnbWei: 0n, priceUsd: 0 };
    const denom = 10n ** BigInt(bnbPriceDecimals);
    const priceLow = (bnbPrice * 98n) / 100n; // -2%
    const priceHigh = (bnbPrice * 102n) / 100n; // +2%
    const minBnbWei = priceLow === 0n ? 0n : divCeil(minDepositWad * denom, priceLow);
    const maxBnbWei = priceHigh === 0n ? 0n : (remainingPerWalletUsdWei * denom) / priceHigh;
    const priceUsd = Number(bnbPrice) / Number(10n ** BigInt(bnbPriceDecimals));
    return { minBnbWei, maxBnbWei, priceUsd };
  }, [bnbPrice, bnbPriceDecimals, minDepositWad, remainingPerWalletUsdWei]);


  // sanitize numeric input: allow digits and one dot; limit to 18 decimals
  function sanitizeAmountInput(raw) {
    let v = (raw || '').replace(/[^0-9.]/g, '');
    const parts = v.split('.');
    if (parts.length > 2) {
      v = `${parts[0]}.${parts.slice(1).join('')}`;
    }
    const [intPart, decPart = ''] = v.split('.');
    const limitedDec = decPart.slice(0, 18);
    return decPart !== undefined ? `${intPart}${decPart !== '' || v.includes('.') ? '.' : ''}${limitedDec}` : intPart;
  }

  function validate() {
    setError('');
    const num = Number(amountInput);
    if (!isFinite(num) || num <= 0) {
      setError('Enter a valid amount');
      return false;
    }
    if (mode === 'USDT') {
      const wad = BigInt(Math.floor(num * 1e18));
      if (wad > usdtBalance) {
        setError('Insufficient USDT balance');
        return false;
      }
      if (wad < minDepositWad) {
        setError(`Minimum is ${formatUsdWei(minDepositWad)}`);
        return false;
      }
      if (wad > remainingPerWalletUsdWei) {
        setError(`Exceeds your max per wallet (${formatUsdWei(maxDepositWad)})`);
        return false;
      }
    } else {
      if (bnbPrice === 0n) {
        setError('BNB price unavailable');
        return false;
      }
      const bnbWei = parseEther(amountInput);
      // must keep 0.001 BNB for gas
      const reserveGasWei = parseEther('0.001');
      const spendableBnbWei = bnbBalance > reserveGasWei ? bnbBalance - reserveGasWei : 0n;
      if (bnbWei > spendableBnbWei) {
        setError('Insufficient BNB balance (keep ~0.001 BNB for gas)');
        return false;
      }
      const { minBnbWei, maxBnbWei } = bnbBounds;
      if (bnbWei < minBnbWei) {
        setError(`BNB amount is below minimum (${formatEther(minBnbWei)} BNB with 2% slippage)`);
        return false;
      }
      if (maxBnbWei > 0n && bnbWei > maxBnbWei) {
        setError(`BNB amount exceeds your max (${formatEther(maxBnbWei)} BNB with 2% slippage)`);
        return false;
      }
    }
    return true;
  }

  // re-validate as user types
  useEffect(() => {
    if (!amountInput) {
      setError('');
      return;
    }
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountInput, mode, usdtBalance, bnbBalance, remainingPerWalletUsdWei, minDepositWad, bnbPrice]);

  // Compute estimated USD from input
  const estimatedUsdWeiFromInput = useMemo(() => {
    if (!amountInput) return 0n;
    try {
      if (mode === 'USDT') {
        return BigInt(Math.floor(Number(amountInput) * 1e18));
      }
      if (bnbPrice === 0n) return 0n;
      const bnbWei = parseEther(amountInput);
      const denom = 10n ** BigInt(bnbPriceDecimals);
      return (bnbWei * bnbPrice) / denom;
    } catch {
      return 0n;
    }
  }, [amountInput, mode, bnbPrice, bnbPriceDecimals]);

  const estimatedTrakenFromInput = useMemo(() => {
    const usd = Number(estimatedUsdWeiFromInput) / 1e18;
    if (!isFinite(usd)) return 0;
    return usd * TRAKEN_PER_USD;
  }, [estimatedUsdWeiFromInput]);

  // Max button logic
  function onMax() {
    if (mode === 'USDT') {
      const allowedWad = remainingPerWalletUsdWei < usdtBalance ? remainingPerWalletUsdWei : usdtBalance;
      const asNum = Number(allowedWad) / 1e18;
      const str = String(asNum);
      setAmountInput(str);
      return;
    }
    if (bnbPrice === 0n) return;
    const reserveGasWei = parseEther('0.001');
    const spendableBnbWei = bnbBalance > reserveGasWei ? bnbBalance - reserveGasWei : 0n;
    const denom = 10n ** BigInt(bnbPriceDecimals);
    // max by remaining per wallet (convert USD remaining -> BNB)
    const remainingBnbWei = remainingPerWalletUsdWei === 0n ? 0n : (remainingPerWalletUsdWei * denom) / bnbPrice;
    const maxBnbWei = spendableBnbWei < remainingBnbWei ? spendableBnbWei : remainingBnbWei;
    const v = formatEther(maxBnbWei);
    setAmountInput(v);
  }

  // Min button logic
  function onMin() {
    if (mode === 'USDT') {
      const asNum = Number(minDepositWad) / 1e18;
      const str = String(asNum);
      setAmountInput(str);
      return;
    }
    if (bnbPrice === 0n) return;
    const v = formatBnbFixed4(bnbBounds.minBnbWei, 'ceil');
    setAmountInput(v);
  }

  async function onDeposit() {
    if (!isConnected) return;
    if (!validate()) return;
    try {
      setTxStatus('pending');
      if (mode === 'USDT') {
        const wad = BigInt(Math.floor(Number(amountInput) * 1e18));
        // approve then deposit
        await writeContractAsync({
          address: usdtAddress,
          abi: erc20Abi,
          functionName: 'approve',
          args: [saleAddress, wad],
        });
        const hash = await writeContractAsync({
          address: saleAddress,
          abi: TRAKEN_SALE_ABI,
          functionName: 'depositUsdt',
          args: [wad],
        });
        setTxHash(hash);
      } else {
        const bnbWei = parseEther(amountInput);
        const hash = await writeContractAsync({
          address: saleAddress,
          abi: TRAKEN_SALE_ABI,
          functionName: 'depositBnb',
          args: [],
          value: bnbWei,
        });
        setTxHash(hash);
      }
      setTxStatus('submitted');
      setAmountInput('');
    } catch (e) {
      setTxStatus('error');
      setError(e?.shortMessage || e?.message || 'Transaction failed');
    }
  }

  const saleStatus = useMemo(() => {
    const now = Math.floor(Date.now() / 1000);
    if (now < Number(startEpoch)) return 'BEFORE';
    if (now > Number(endEpoch)) return 'CLOSED';
    return 'OPEN';
  }, [startEpoch, endEpoch]);

  const isWalletConnect = connector?.id === 'walletConnect';

  // If not connected, render ONLY the connect button and title
  if (!isConnected) {
    return (
      <Section size="2">
        <Container size="3">
          <Flex direction="column" gap="4">
            <Flex justify="end">
              <ConnectButton />
            </Flex>
            <Heading
              as="h1"
              align="center"
              size="9"
              className="font-[Azonix] tracking-widest text-glow-pink sale-title"
            >
              TRAKEN TOKEN SALE
            </Heading>
          </Flex>
        </Container>
      </Section>
    );
  }

  return (
    <Section size="2">
      <Container size="3">
        <Flex direction="column" gap="5">
          <Flex justify="end">
            <ConnectButton />
          </Flex>
          {isConnected && !isBsc && (
            <Callout.Root color="red">
              <Callout.Text>Wrong Network, connect to BSC (56)</Callout.Text>
            </Callout.Root>
          )}
          <Heading
            as="h1"
            align="center"
            size="9"
            className="font-[Azonix] tracking-widest text-glow-pink sale-title"
          >
            TRAKEN TOKEN SALE
          </Heading>

          {isConnected && isWalletConnect && (
            <Callout.Root color="yellow">
              <Callout.Text>
                WalletConnect notice: they have adopted dark patterns and their privacy policy claims to collect and store all transaction and personal data. Proceed with caution.
              </Callout.Text>
            </Callout.Root>
          )}

          {/* Status badge + Countdown */}
          <Flex direction="column" align="center" gap="2">
            <Badge
              size="2"
              color={saleStatus === 'OPEN' ? 'cyan' : saleStatus === 'BEFORE' ? 'gray' : 'gray'}
              variant="surface"
              className={saleStatus === 'OPEN' ? 'text-glow-cyan' : ''}
            >
              {saleStatus === 'OPEN' && 'SALE OPEN'}
              {saleStatus === 'BEFORE' && 'UPCOMING'}
              {saleStatus === 'CLOSED' && 'SALE CLOSED'}
            </Badge>
            <Countdown
              startEpoch={startEpoch}
              endEpoch={endEpoch}
              onOpen={() => {}}
            />
          </Flex>

          {/* Progress during OPEN */}
          {saleStatus === 'OPEN' && (
            <Card size="2">
              <Flex direction="column" gap="3" style={{ maxWidth: 960, margin: '0 auto' }}>
                <Flex align="baseline" justify="between">
                  <Text size="4" weight="medium">Sale Progress</Text>
                  <Text size="3" color="cyan">
                    <AnimatedCounter value={totalDepositsUsd} format={formatUsdNumber} /> / {formatUsdWei(hardcap)} ({formatPercent(percent)})
                  </Text>
                </Flex>
                <Progress max={100} value={percent} size="3" color="violet" />
                {/* Softcap/Hardcap markers */}
                <Box style={{ position: 'relative', height: 24 }}>
                  {(() => {
                    const softcapPct = hardcap === 0n ? 0 : Math.min(100, Number((softcap * 10000n) / hardcap) / 100);
                    const hardcapPct = 100;
                    return (
                      <>
                        <Box style={{ position: 'absolute', left: `${softcapPct}%`, top: 0, bottom: 12, width: 2, background: 'rgba(180, 99, 255, 0.8)', transform: 'translateX(-1px)' }} />
                        <Text size="2" color="gray" style={{ position: 'absolute', left: `${softcapPct}%`, bottom: 0, transform: 'translateX(-50%)' }}>Softcap</Text>
                        <Box style={{ position: 'absolute', left: `${hardcapPct}%`, top: 0, bottom: 12, width: 2, background: 'rgba(180, 99, 255, 0.8)', transform: 'translateX(-1px)' }} />
                        <Text size="2" color="gray" style={{ position: 'absolute', left: `${hardcapPct}%`, bottom: 0, transform: 'translateX(-100%)' }}>Hardcap</Text>
                      </>
                    );
                  })()}
                </Box>
              </Flex>
            </Card>
          )}

          {/* Expected TRAKEN for user */}
          <Card size="2" variant="surface">
            <Flex direction="column" align="center" gap="2">
              <Badge color="violet" variant="soft">
                {(() => {
                  const usdPerMillion = Math.round(1000000 / TRAKEN_PER_USD);
                  return `Rate: $${usdPerMillion} for 1,000,000 TRAKEN`;
                })()}
              </Badge>
              <Text size="4">
                Your current allocation (estimate):{' '}
                <Text as="span" weight="bold" color="violet" className="text-glow">
                  <AnimatedCounter value={userTraken} format={(v) => `${Math.round(v).toLocaleString()} TRAKEN`} />
                </Text>
              </Text>
            </Flex>
          </Card>

          {/* Deposit form */}
          {saleStatus === 'OPEN' && (
            <Card size="2" variant="surface">
              <Flex direction="column" gap="3" style={{ maxWidth: 960, margin: '0 auto' }}>
                <SegmentedControl.Root
                  value={mode}
                  onValueChange={setMode}
                >
                  <SegmentedControl.Item value="USDT">USDT</SegmentedControl.Item>
                  <SegmentedControl.Item value="BNB">BNB</SegmentedControl.Item>
                </SegmentedControl.Root>
                <Text size="2" color="gray">
                  Min per deposit: {formatUsdWei(minDepositWad)} | Your deposited: {formatUsdWei(userDeposited)} | Your remaining: {formatUsdWei(remainingPerWalletUsdWei)}
                </Text>
                {mode === 'BNB' && (
                  <Text size="2" color="gray">
                    BNB price: ${bnbBounds.priceUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })} | Min: {formatBnbFixed4(bnbBounds.minBnbWei, 'ceil')} BNB | Max: {bnbBounds.maxBnbWei > 0n ? formatBnbFixed4(bnbBounds.maxBnbWei, 'floor') : '—'} BNB (2% slippage)
                  </Text>
                )}
                <Flex align="center" gap="3">
                  <Box grow="1">
                    <TextField.Root
                      placeholder={mode === 'USDT' ? 'Amount in USDT' : 'Amount in BNB'}
                      value={amountInput}
                      onChange={(e) => setAmountInput(sanitizeAmountInput(e.target.value))}
                    />
                  </Box>
                  <Button
                    size="2"
                    variant="soft"
                    onClick={onMin}
                    disabled={txStatus === 'pending'}
                  >
                    Min
                  </Button>
                  <Button
                    size="2"
                    variant="soft"
                    onClick={onMax}
                    disabled={txStatus === 'pending'}
                  >
                    Max
                  </Button>
                  <Button
                    size="3"
                    color="violet"
                    onClick={onDeposit}
                    disabled={txStatus === 'pending' || usdtAddress === ZERO_ADDRESS}
                  >
                    {txStatus === 'pending' ? 'Processing…' : 'Deposit'}
                  </Button>
                </Flex>
                <Flex direction="column" gap="1">
                  {amountInput && (
                    <Text size="2" color="gray">
                      ≈ {formatUsdWei(estimatedUsdWeiFromInput)} | You will receive ~ {estimatedTrakenFromInput.toLocaleString(undefined, { maximumFractionDigits: 0 })} TRAKEN
                    </Text>
                  )}
                  <Text size="2" color="gray">
                    Balance: {Number(usdtBalance) / 1e18} USDT | {Number(bnbBalance) / 1e18} BNB
                  </Text>
                </Flex>
                {error && (
                  <Callout.Root color="red">
                    <Callout.Text>{error}</Callout.Text>
                  </Callout.Root>
                )}
                {txStatus === 'submitted' && txHash && (
                  <Callout.Root color="green">
                    <Callout.Text>
                      Transaction submitted. View on{' '}
                      <a href={`https://bscscan.com/tx/${txHash}`} target="_blank" rel="noreferrer">BscScan</a>.
                    </Callout.Text>
                  </Callout.Root>
                )}
              </Flex>
            </Card>
          )}

          {/* Data section */}
          <Card size="2" variant="surface">
            <Flex direction="column" gap="4" style={{ maxWidth: 960, margin: '0 auto' }}>
              <Heading as="h2" size="6">Sale Details</Heading>
              <Grid columns={{ initial: '1', sm: '2' }} gap="3" className="opacity-90">
                <Text as="div" size="3"><Text as="span" color="violet">Start:</Text> {Number(startEpoch) ? new Date(Number(startEpoch) * 1000).toLocaleString() : 'TBD'}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">End:</Text> {Number(endEpoch) ? new Date(Number(endEpoch) * 1000).toLocaleString() : 'TBD'}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">Min deposit:</Text> {formatUsdWei(minDepositWad)}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">Max per wallet:</Text> {formatUsdWei(maxDepositWad)}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">Soft cap:</Text> {formatUsdWei(softcap)}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">Hard cap:</Text> {formatUsdWei(hardcap)}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">Total deposits:</Text> {formatUsdWei(totalDeposits)}</Text>
                <Text as="div" size="3"><Text as="span" color="violet">Your deposited:</Text> {formatUsdWei(userDeposited)}</Text>
              </Grid>

              <Heading as="h2" size="6">Traken Tokenomics</Heading>
              <Grid columns={{ initial: '1', sm: '2' }} gap="2" className="opacity-90">
                <Text as="div" size="3">• Name/Ticker: Traken AI / TRAKEN</Text>
                <Text as="div" size="3">• Buy tax: 2%</Text>
                <Text as="div" size="3">• Sell tax: 2%</Text>
                <Text as="div" size="3">• Tax allocation: 25% liquidity, 25% AI dev, 5% burn, 45% core</Text>
                <Box asChild style={{ gridColumn: '1 / -1' }}>
                  <Text size="3">• {(() => { const usdPerMillion = Math.round(1000000 / TRAKEN_PER_USD); return `Rate: $${usdPerMillion} / 1,000,000 TRAKEN`; })()}</Text>
                </Box>
              </Grid>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Section>
  );
}


