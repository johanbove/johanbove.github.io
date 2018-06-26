---
layout: post
categories: posts
title: "gem install bundler issue"
twitter_image: "http://pngimg.com/uploads/ruby/ruby_PNG29.png"
---

I can't install anything with ``gem install bundler``. Ruby barfs out this stack dump.

Reinstalled **rbenv** and tried both with installing Ruby v2.3.3 and v2.5.1. Both output the same error. 

I'm on Windows 10 Version 1803 (Build 17134.112).

The command ``lsb_release -a`` outputs:

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 16.04.4 LTS
Release:        16.04
Codename:       xenial
```

## The Stack Dump

```
Johan@Surface:~$ gem install bundler
/home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/timeout.rb:84: [BUG] pthread_cond_timedwait: Invalid argument (EINVAL)
ruby 2.3.3p222 (2016-11-21 revision 56859) [x86_64-linux]

-- Control frame information -----------------------------------------------
c:0003 p:---- s:0008 e:000007 CFUNC  :sleep
c:0002 p:0032 s:0004 e:000003 BLOCK  /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/timeout.rb:84 [FINISH]
c:0001 p:---- s:0002 e:000001 (none) [FINISH]

-- Ruby level backtrace information ----------------------------------------
/home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/timeout.rb:84:in `block (2 levels) in timeout'
/home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/timeout.rb:84:in `sleep'

-- C level backtrace information -------------------------------------------
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(rb_vm_bugreport+0xcf1) [0x7f89b5417821] vm_dump.c:692
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(rb_bug+0xd0) [0x7f89b53f3a60] error.c:420
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(rb_bug_errno+0x3a) [0x7f89b53f3c0a] error.c:449
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(native_sleep+0x224) [0x7f89b538cf84] thread_pthread.c:363
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(sleep_timeval.constprop.68+0x1ce) [0x7f89b539080e] thread.c:1111
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(rb_f_sleep+0x30) [0x7f89b5298c10] process.c:4415
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(vm_call_cfunc+0xf0) [0x7f89b536b0c0] vm_insnhelper.c:1642
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(vm_call_method_each_type+0x5e) [0x7f89b5377cae] vm_insnhelper.c:2026
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(vm_call_method+0xe3) [0x7f89b5378223] vm_insnhelper.c:2176
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(vm_exec_core+0x1219) [0x7f89b5371ff9] insns.def:994
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(vm_exec+0x86) [0x7f89b5376ba6] vm.c:1650
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(invoke_block_from_c_0+0x2ed) [0x7f89b537787d] vm.c:921
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(vm_invoke_proc+0xc3) [0x7f89b5377953] vm.c:996
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(thread_start_func_2+0x676) [0x7f89b5391b16] thread.c:584
/home/Johan/.rbenv/versions/2.3.3/bin/ruby(thread_start_func_1+0xd0) [0x7f89b5391f90] thread_pthread.c:882
/lib/x86_64-linux-gnu/libpthread.so.0(start_thread+0xca) [0x7f89b4be76ba]
/lib/x86_64-linux-gnu/libc.so.6(__clone+0x6d) [0x7f89b3f3741d]

-- Other runtime information -----------------------------------------------

* Loaded script: /home/Johan/.rbenv/versions/2.3.3/bin/gem

* Loaded features:

    0 enumerator.so
    1 thread.rb
    2 rational.so
    3 complex.so
    4 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/encdb.so
    5 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/trans/transdb.so
    6 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/unicode_normalize.rb
    7 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/rbconfig.rb
    8 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/compatibility.rb
    9 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/defaults.rb
   10 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/deprecate.rb
   11 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/errors.rb
   12 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/version.rb
   13 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/requirement.rb
   14 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/platform.rb
   15 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/basic_specification.rb
   16 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/stub_specification.rb
   17 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/util/list.rb
   18 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/stringio.so
   19 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/specification.rb
   20 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/exceptions.rb
   21 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/dependency.rb
   22 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/core_ext/kernel_gem.rb
   23 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/monitor.rb
   24 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/core_ext/kernel_require.rb
   25 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems.rb
   26 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/path_support.rb
   27 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/version.rb
   28 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/core_ext/name_error.rb
   29 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/levenshtein.rb
   30 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/jaro_winkler.rb
   31 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/spell_checkable.rb
   32 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/delegate.rb
   33 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/spell_checkers/name_error_checkers/class_name_checker.rb
   34 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/spell_checkers/name_error_checkers/variable_name_checker.rb
   35 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/spell_checkers/name_error_checkers.rb
   36 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/spell_checkers/method_name_checker.rb
   37 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/spell_checkers/null_checker.rb
   38 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean/formatter.rb
   39 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/gems/2.3.0/gems/did_you_mean-1.0.0/lib/did_you_mean.rb
   40 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/optparse.rb
   41 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/console.so
   42 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/user_interaction.rb
   43 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/command.rb
   44 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/command_manager.rb
   45 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/etc.so
   46 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/config_file.rb
   47 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/gem_runner.rb
   48 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/exception.rb
   49 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/syntax_error.rb
   50 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/psych.so
   51 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/omap.rb
   52 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/set.rb
   53 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/class_loader.rb
   54 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/strscan.so
   55 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/scalar_scanner.rb
   56 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/node.rb
   57 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/stream.rb
   58 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/document.rb
   59 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/sequence.rb
   60 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/scalar.rb
   61 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/mapping.rb
   62 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes/alias.rb
   63 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/nodes.rb
   64 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/streaming.rb
   65 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors/visitor.rb
   66 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors/to_ruby.rb
   67 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors/emitter.rb
   68 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/handler.rb
   69 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/tree_builder.rb
   70 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors/yaml_tree.rb
   71 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/json/ruby_events.rb
   72 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors/json_tree.rb
   73 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors/depth_first.rb
   74 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/visitors.rb
   75 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/parser.rb
   76 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/coder.rb
   77 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/core_ext.rb
   78 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/date_core.so
   79 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/date.rb
   80 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/deprecated.rb
   81 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/stream.rb
   82 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/json/yaml_events.rb
   83 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/json/tree_builder.rb
   84 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/json/stream.rb
   85 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych/handlers/document_stream.rb
   86 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/psych.rb
   87 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/psych_additions.rb
   88 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/psych_tree.rb
   89 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/yaml.rb
   90 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/syck_hack.rb
   91 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16le.so
   92 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16be.so
   93 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/timeout.rb
   94 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/install_update_options.rb
   95 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/tsort.rb
   96 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/dependency_list.rb
   97 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/fileutils.rb
   98 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/digest.so
   99 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/digest.rb
  100 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/openssl.so
  101 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/bn.rb
  102 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/pkey.rb
  103 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/cipher.rb
  104 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/config.rb
  105 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/digest.rb
  106 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/x509.rb
  107 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/buffering.rb
  108 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/nonblock.so
  109 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl/ssl.rb
  110 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/openssl.rb
  111 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/security/policy.rb
  112 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/security/policies.rb
  113 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/security/trust_dir.rb
  114 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/security/signer.rb
  115 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/security.rb
  116 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/zlib.so
  117 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/digest_io.rb
  118 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/source.rb
  119 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/file_source.rb
  120 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/io_source.rb
  121 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/old.rb
  122 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/tar_header.rb
  123 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/tar_reader/entry.rb
  124 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/tar_reader.rb
  125 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package/tar_writer.rb
  126 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/package.rb
  127 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext/build_error.rb
  128 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext/builder.rb
  129 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext/configure_builder.rb
  130 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/tmpdir.rb
  131 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/tempfile.rb
  132 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext/ext_conf_builder.rb
  133 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext/rake_builder.rb
  134 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext/cmake_builder.rb
  135 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/ext.rb
  136 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/installer.rb
  137 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/socket.so
  138 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/wait.so
  139 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/socket.rb
  140 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/protocol.rb
  141 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/rfc2396_parser.rb
  142 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/rfc3986_parser.rb
  143 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/common.rb
  144 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/generic.rb
  145 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/ftp.rb
  146 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/http.rb
  147 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/https.rb
  148 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/ldap.rb
  149 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/ldaps.rb
  150 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri/mailto.rb
  151 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/uri.rb
  152 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/exceptions.rb
  153 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/header.rb
  154 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/windows_31j.so
  155 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/generic_request.rb
  156 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/request.rb
  157 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/requests.rb
  158 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/response.rb
  159 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/responses.rb
  160 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/proxy_delta.rb
  161 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http/backward.rb
  162 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/http.rb
  163 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/time.rb
  164 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request/http_pool.rb
  165 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request/https_pool.rb
  166 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request/connection_pools.rb
  167 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request.rb
  168 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/cgi/core.rb
  169 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/cgi/escape.so
  170 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/cgi/util.rb
  171 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/cgi/cookie.rb
  172 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/cgi.rb
  173 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/uri_formatter.rb
  174 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/securerandom.rb
  175 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/resolv.rb
  176 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/remote_fetcher.rb
  177 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/text.rb
  178 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/name_tuple.rb
  179 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/spec_fetcher.rb
  180 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/util.rb
  181 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source/git.rb
  182 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source/installed.rb
  183 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source/specific_file.rb
  184 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source/local.rb
  185 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source/lock.rb
  186 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source/vendor.rb
  187 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source.rb
  188 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/available_set.rb
  189 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/dependency_installer.rb
  190 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/local_remote_options.rb
  191 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/validator.rb
  192 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/version_option.rb
  193 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/commands/install_command.rb
  194 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/install_message.rb
  195 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request_set/gem_dependency_api.rb
  196 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request_set/lockfile/parser.rb
  197 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request_set/lockfile/tokenizer.rb
  198 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request_set/lockfile.rb
  199 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/request_set.rb
  200 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/gem_metadata.rb
  201 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/errors.rb
  202 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/set.rb
  203 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/dependency_graph.rb
  204 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/state.rb
  205 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/modules/specification_provider.rb
  206 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/resolution.rb
  207 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/resolver.rb
  208 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo/modules/ui.rb
  209 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo/lib/molinillo.rb
  210 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/molinillo.rb
  211 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/activation_request.rb
  212 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/conflict.rb
  213 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/dependency_request.rb
  214 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/requirement_list.rb
  215 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/stats.rb
  216 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/set.rb
  217 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/api_set.rb
  218 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/composed_set.rb
  219 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/best_set.rb
  220 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/current_set.rb
  221 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/git_set.rb
  222 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/index_set.rb
  223 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/installer_set.rb
  224 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/lock_set.rb
  225 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/vendor_set.rb
  226 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/source_set.rb
  227 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/specification.rb
  228 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/spec_specification.rb
  229 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/api_specification.rb
  230 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/git_specification.rb
  231 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/index_specification.rb
  232 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/installed_specification.rb
  233 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/local_specification.rb
  234 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/lock_specification.rb
  235 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver/vendor_specification.rb
  236 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/resolver.rb
  237 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rdoc.rb
  238 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rdoc/rubygems_hook.rb
  239 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/rdoc.rb
  240 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/rubygems/source_list.rb
  241 /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/net/https.rb

* Process memory map:

7f89aaf85000-7f89ab14e000 r--s 00000000 00:00 62822              /lib/x86_64-linux-gnu/libc-2.23.so
7f89ab14e000-7f89ac000000 r--s 00000000 00:00 503902             /home/Johan/.rbenv/versions/2.3.3/bin/ruby
7f89ac000000-7f89ac021000 rw-p 00000000 00:00 0
7f89ac021000-7f89b0000000 ---p 00000000 00:00 0
7f89b01c0000-7f89b01d7000 r-xp 00000000 00:00 62838              /lib/x86_64-linux-gnu/libresolv-2.23.so
7f89b01d7000-7f89b01d9000 ---p 00017000 00:00 62838              /lib/x86_64-linux-gnu/libresolv-2.23.so
7f89b01d9000-7f89b03d7000 ---p 00000019 00:00 62838              /lib/x86_64-linux-gnu/libresolv-2.23.so
7f89b03d7000-7f89b03d8000 r--p 00017000 00:00 62838              /lib/x86_64-linux-gnu/libresolv-2.23.so
7f89b03d8000-7f89b03d9000 rw-p 00018000 00:00 62838              /lib/x86_64-linux-gnu/libresolv-2.23.so
7f89b03d9000-7f89b03db000 rw-p 00000000 00:00 0
7f89b03e0000-7f89b03e5000 r-xp 00000000 00:00 62852              /lib/x86_64-linux-gnu/libnss_dns-2.23.so
7f89b03e5000-7f89b03e7000 ---p 00005000 00:00 62852              /lib/x86_64-linux-gnu/libnss_dns-2.23.so
7f89b03e7000-7f89b05e5000 ---p 00000007 00:00 62852              /lib/x86_64-linux-gnu/libnss_dns-2.23.so
7f89b05e5000-7f89b05e6000 r--p 00005000 00:00 62852              /lib/x86_64-linux-gnu/libnss_dns-2.23.so
7f89b05e6000-7f89b05e7000 rw-p 00006000 00:00 62852              /lib/x86_64-linux-gnu/libnss_dns-2.23.so
7f89b05f0000-7f89b0606000 r-xp 00000000 00:00 26426              /lib/x86_64-linux-gnu/libgcc_s.so.1
7f89b0606000-7f89b0805000 ---p 00000016 00:00 26426              /lib/x86_64-linux-gnu/libgcc_s.so.1
7f89b0805000-7f89b0806000 rw-p 00015000 00:00 26426              /lib/x86_64-linux-gnu/libgcc_s.so.1
7f89b0810000-7f89b081b000 r-xp 00000000 00:00 62861              /lib/x86_64-linux-gnu/libnss_files-2.23.so
7f89b081b000-7f89b081c000 ---p 0000b000 00:00 62861              /lib/x86_64-linux-gnu/libnss_files-2.23.so
7f89b081c000-7f89b0a1a000 ---p 0000000c 00:00 62861              /lib/x86_64-linux-gnu/libnss_files-2.23.so
7f89b0a1a000-7f89b0a1b000 r--p 0000a000 00:00 62861              /lib/x86_64-linux-gnu/libnss_files-2.23.so
7f89b0a1b000-7f89b0a1c000 rw-p 0000b000 00:00 62861              /lib/x86_64-linux-gnu/libnss_files-2.23.so
7f89b0a1c000-7f89b0a22000 rw-p 00000000 00:00 0
7f89b0a30000-7f89b0a31000 ---p 00000000 00:00 0
7f89b0a31000-7f89b0b31000 rw-p 00000000 00:00 0
7f89b0b40000-7f89b0c41000 rw-p 00000000 00:00 0
7f89b0c50000-7f89b0c51000 r-xp 00000000 00:00 504717             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/cgi/escape.so
7f89b0c51000-7f89b0c78000 ---p 00001000 00:00 504717             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/cgi/escape.so
7f89b0c78000-7f89b0e51000 ---p 00000028 00:00 504717             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/cgi/escape.so
7f89b0e51000-7f89b0e52000 r--p 00001000 00:00 504717             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/cgi/escape.so
7f89b0e52000-7f89b0e53000 rw-p 00002000 00:00 504717             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/cgi/escape.so
7f89b0e60000-7f89b0e63000 r-xp 00000000 00:00 504785             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/windows_31j.so
7f89b0e63000-7f89b0e90000 ---p 00003000 00:00 504785             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/windows_31j.so
7f89b0e90000-7f89b1062000 ---p 00000030 00:00 504785             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/windows_31j.so
7f89b1062000-7f89b1063000 r--p 00002000 00:00 504785             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/windows_31j.so
7f89b1063000-7f89b1064000 rw-p 00003000 00:00 504785             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/windows_31j.so
7f89b1070000-7f89b1071000 r-xp 00000000 00:00 504793             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/wait.so
7f89b1071000-7f89b109c000 ---p 00001000 00:00 504793             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/wait.so
7f89b109c000-7f89b1271000 ---p 0000002c 00:00 504793             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/wait.so
7f89b1271000-7f89b1272000 r--p 00001000 00:00 504793             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/wait.so
7f89b1272000-7f89b1273000 rw-p 00002000 00:00 504793             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/wait.so
7f89b1280000-7f89b12ac000 r-xp 00000000 00:00 504814             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/socket.so
7f89b12ac000-7f89b1378000 ---p 0002c000 00:00 504814             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/socket.so
7f89b1378000-7f89b14ab000 ---p 000000f8 00:00 504814             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/socket.so
7f89b14ab000-7f89b14ac000 r--p 0002b000 00:00 504814             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/socket.so
7f89b14ac000-7f89b14ad000 rw-p 0002c000 00:00 504814             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/socket.so
7f89b14b0000-7f89b14c9000 r-xp 00000000 00:00 26646              /lib/x86_64-linux-gnu/libz.so.1.2.8
7f89b14c9000-7f89b14ca000 ---p 00019000 00:00 26646              /lib/x86_64-linux-gnu/libz.so.1.2.8
7f89b14ca000-7f89b16c8000 ---p 0000001a 00:00 26646              /lib/x86_64-linux-gnu/libz.so.1.2.8
7f89b16c8000-7f89b16c9000 r--p 00018000 00:00 26646              /lib/x86_64-linux-gnu/libz.so.1.2.8
7f89b16c9000-7f89b16ca000 rw-p 00019000 00:00 26646              /lib/x86_64-linux-gnu/libz.so.1.2.8
7f89b16d0000-7f89b16e0000 r-xp 00000000 00:00 504819             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/zlib.so
7f89b16e0000-7f89b1733000 ---p 00010000 00:00 504819             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/zlib.so
7f89b1733000-7f89b18df000 ---p 00000063 00:00 504819             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/zlib.so
7f89b18df000-7f89b18e0000 r--p 0000f000 00:00 504819             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/zlib.so
7f89b18e0000-7f89b18e1000 rw-p 00010000 00:00 504819             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/zlib.so
7f89b18f0000-7f89b18f1000 r-xp 00000000 00:00 504792             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/nonblock.so
7f89b18f1000-7f89b191a000 ---p 00001000 00:00 504792             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/nonblock.so
7f89b191a000-7f89b1af1000 ---p 0000002a 00:00 504792             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/nonblock.so
7f89b1af1000-7f89b1af2000 r--p 00001000 00:00 504792             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/nonblock.so
7f89b1af2000-7f89b1af3000 rw-p 00002000 00:00 504792             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/nonblock.so
7f89b1b00000-7f89b1b04000 r-xp 00000000 00:00 504727             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/digest.so
7f89b1b04000-7f89b1b2b000 ---p 00004000 00:00 504727             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/digest.so
7f89b1b2b000-7f89b1d03000 ---p 0000002b 00:00 504727             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/digest.so
7f89b1d03000-7f89b1d04000 r--p 00003000 00:00 504727             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/digest.so
7f89b1d04000-7f89b1d05000 rw-p 00004000 00:00 504727             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/digest.so
7f89b1d10000-7f89b1f2a000 r-xp 00000000 00:00 58572              /lib/x86_64-linux-gnu/libcrypto.so.1.0.0
7f89b1f2a000-7f89b1f51000 ---p 0021a000 00:00 58572              /lib/x86_64-linux-gnu/libcrypto.so.1.0.0
7f89b1f51000-7f89b2129000 ---p 00000241 00:00 58572              /lib/x86_64-linux-gnu/libcrypto.so.1.0.0
7f89b2129000-7f89b2145000 r--p 00219000 00:00 58572              /lib/x86_64-linux-gnu/libcrypto.so.1.0.0
7f89b2145000-7f89b2151000 rw-p 00235000 00:00 58572              /lib/x86_64-linux-gnu/libcrypto.so.1.0.0
7f89b2151000-7f89b2154000 rw-p 00000000 00:00 0
7f89b2160000-7f89b21be000 r-xp 00000000 00:00 58571              /lib/x86_64-linux-gnu/libssl.so.1.0.0
7f89b21be000-7f89b21c9000 ---p 0005e000 00:00 58571              /lib/x86_64-linux-gnu/libssl.so.1.0.0
7f89b21c9000-7f89b23be000 ---p 00000069 00:00 58571              /lib/x86_64-linux-gnu/libssl.so.1.0.0
7f89b23be000-7f89b23c2000 r--p 0005e000 00:00 58571              /lib/x86_64-linux-gnu/libssl.so.1.0.0
7f89b23c2000-7f89b23c9000 rw-p 00062000 00:00 58571              /lib/x86_64-linux-gnu/libssl.so.1.0.0
7f89b23d0000-7f89b2422000 r-xp 00000000 00:00 504803             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/openssl.so
7f89b2422000-7f89b2621000 ---p 00052000 00:00 504803             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/openssl.so
7f89b2621000-7f89b2623000 r--p 00051000 00:00 504803             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/openssl.so
7f89b2623000-7f89b2625000 rw-p 00053000 00:00 504803             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/openssl.so
7f89b2625000-7f89b2626000 rw-p 00000000 00:00 0
7f89b2630000-7f89b2631000 r-xp 00000000 00:00 504778             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16be.so
7f89b2631000-7f89b264e000 ---p 00001000 00:00 504778             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16be.so
7f89b264e000-7f89b2831000 ---p 0000001e 00:00 504778             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16be.so
7f89b2831000-7f89b2832000 r--p 00001000 00:00 504778             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16be.so
7f89b2832000-7f89b2833000 rw-p 00002000 00:00 504778             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16be.so
7f89b2840000-7f89b2841000 r-xp 00000000 00:00 504779             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16le.so
7f89b2841000-7f89b285e000 ---p 00001000 00:00 504779             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16le.so
7f89b285e000-7f89b2a41000 ---p 0000001e 00:00 504779             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16le.so
7f89b2a41000-7f89b2a42000 r--p 00001000 00:00 504779             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16le.so
7f89b2a42000-7f89b2a43000 rw-p 00002000 00:00 504779             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/utf_16le.so
7f89b2a50000-7f89b2a83000 r-xp 00000000 00:00 504720             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/date_core.so
7f89b2a83000-7f89b2b6b000 ---p 00033000 00:00 504720             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/date_core.so
7f89b2b6b000-7f89b2c83000 ---p 0000011b 00:00 504720             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/date_core.so
7f89b2c83000-7f89b2c84000 r--p 00033000 00:00 504720             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/date_core.so
7f89b2c84000-7f89b2c85000 rw-p 00034000 00:00 504720             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/date_core.so
7f89b2c85000-7f89b2c86000 rw-p 00000000 00:00 0
7f89b2c90000-7f89b2c96000 r-xp 00000000 00:00 504816             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/strscan.so
7f89b2c96000-7f89b2cd1000 ---p 00006000 00:00 504816             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/strscan.so
7f89b2cd1000-7f89b2e95000 ---p 00000041 00:00 504816             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/strscan.so
7f89b2e95000-7f89b2e96000 r--p 00005000 00:00 504816             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/strscan.so
7f89b2e96000-7f89b2e97000 rw-p 00006000 00:00 504816             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/strscan.so
7f89b2ea0000-7f89b2ebd000 r-xp 00000000 00:00 74093              /usr/lib/x86_64-linux-gnu/libyaml-0.so.2.0.4
7f89b2ebd000-7f89b2ebf000 ---p 0001d000 00:00 74093              /usr/lib/x86_64-linux-gnu/libyaml-0.so.2.0.4
7f89b2ebf000-7f89b30bd000 ---p 0000001f 00:00 74093              /usr/lib/x86_64-linux-gnu/libyaml-0.so.2.0.4
7f89b30bd000-7f89b30be000 r--p 0001d000 00:00 74093              /usr/lib/x86_64-linux-gnu/libyaml-0.so.2.0.4
7f89b30be000-7f89b30bf000 rw-p 0001e000 00:00 74093              /usr/lib/x86_64-linux-gnu/libyaml-0.so.2.0.4
7f89b30c0000-7f89b30c6000 r-xp 00000000 00:00 504805             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/psych.so
7f89b30c6000-7f89b3101000 ---p 00006000 00:00 504805             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/psych.so
7f89b3101000-7f89b32c5000 ---p 00000041 00:00 504805             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/psych.so
7f89b32c5000-7f89b32c6000 r--p 00005000 00:00 504805             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/psych.so
7f89b32c6000-7f89b32c7000 rw-p 00006000 00:00 504805             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/psych.so
7f89b32d0000-7f89b32d6000 r-xp 00000000 00:00 504786             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/etc.so
7f89b32d6000-7f89b3308000 ---p 00006000 00:00 504786             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/etc.so
7f89b3308000-7f89b34d5000 ---p 00000038 00:00 504786             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/etc.so
7f89b34d5000-7f89b34d6000 r--p 00005000 00:00 504786             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/etc.so
7f89b34d6000-7f89b34d7000 rw-p 00006000 00:00 504786             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/etc.so
7f89b34e0000-7f89b34e4000 r-xp 00000000 00:00 504791             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/console.so
7f89b34e4000-7f89b351a000 ---p 00004000 00:00 504791             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/console.so
7f89b351a000-7f89b36e4000 ---p 0000003a 00:00 504791             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/console.so
7f89b36e4000-7f89b36e5000 r--p 00004000 00:00 504791             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/console.so
7f89b36e5000-7f89b36e6000 rw-p 00005000 00:00 504791             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/io/console.so
7f89b36f0000-7f89b36f8000 r-xp 00000000 00:00 504815             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/stringio.so
7f89b36f8000-7f89b3735000 ---p 00008000 00:00 504815             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/stringio.so
7f89b3735000-7f89b38f7000 ---p 00000045 00:00 504815             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/stringio.so
7f89b38f7000-7f89b38f8000 r--p 00007000 00:00 504815             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/stringio.so
7f89b38f8000-7f89b38f9000 rw-p 00008000 00:00 504815             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/stringio.so
7f89b3900000-7f89b3902000 r-xp 00000000 00:00 504775             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/trans/transdb.so
7f89b3902000-7f89b390a000 ---p 00002000 00:00 504775             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/trans/transdb.so
7f89b390a000-7f89b3b02000 ---p 0000000a 00:00 504775             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/trans/transdb.so
7f89b3b02000-7f89b3b03000 r--p 00002000 00:00 504775             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/trans/transdb.so
7f89b3b03000-7f89b3b04000 rw-p 00003000 00:00 504775             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/trans/transdb.so
7f89b3b10000-7f89b3b12000 r-xp 00000000 00:00 504732             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/encdb.so
7f89b3b12000-7f89b3b3c000 ---p 00002000 00:00 504732             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/encdb.so
7f89b3b3c000-7f89b3d11000 ---p 0000002c 00:00 504732             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/encdb.so
7f89b3d11000-7f89b3d12000 r--p 00001000 00:00 504732             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/encdb.so
7f89b3d12000-7f89b3d13000 rw-p 00002000 00:00 504732             /home/Johan/.rbenv/versions/2.3.3/lib/ruby/2.3.0/x86_64-linux/enc/encdb.so
7f89b3d20000-7f89b3e21000 rw-p 00000000 00:00 0
7f89b3e30000-7f89b3ff0000 r-xp 00000000 00:00 62822              /lib/x86_64-linux-gnu/libc-2.23.so
7f89b3ff0000-7f89b3ff9000 ---p 001c0000 00:00 62822              /lib/x86_64-linux-gnu/libc-2.23.so
7f89b3ff9000-7f89b41f0000 ---p 000001c9 00:00 62822              /lib/x86_64-linux-gnu/libc-2.23.so
7f89b41f0000-7f89b41f4000 r--p 001c0000 00:00 62822              /lib/x86_64-linux-gnu/libc-2.23.so
7f89b41f4000-7f89b41f6000 rw-p 001c4000 00:00 62822              /lib/x86_64-linux-gnu/libc-2.23.so
7f89b41f6000-7f89b41fa000 rw-p 00000000 00:00 0
7f89b4200000-7f89b4308000 r-xp 00000000 00:00 62803              /lib/x86_64-linux-gnu/libm-2.23.so
7f89b4308000-7f89b430a000 ---p 00108000 00:00 62803              /lib/x86_64-linux-gnu/libm-2.23.so
7f89b430a000-7f89b4507000 ---p 0000010a 00:00 62803              /lib/x86_64-linux-gnu/libm-2.23.so
7f89b4507000-7f89b4508000 r--p 00107000 00:00 62803              /lib/x86_64-linux-gnu/libm-2.23.so
7f89b4508000-7f89b4509000 rw-p 00108000 00:00 62803              /lib/x86_64-linux-gnu/libm-2.23.so
7f89b4510000-7f89b4519000 r-xp 00000000 00:00 62874              /lib/x86_64-linux-gnu/libcrypt-2.23.so
7f89b4519000-7f89b451a000 ---p 00009000 00:00 62874              /lib/x86_64-linux-gnu/libcrypt-2.23.so
7f89b451a000-7f89b4718000 ---p 0000000a 00:00 62874              /lib/x86_64-linux-gnu/libcrypt-2.23.so
7f89b4718000-7f89b4719000 r--p 00008000 00:00 62874              /lib/x86_64-linux-gnu/libcrypt-2.23.so
7f89b4719000-7f89b471a000 rw-p 00009000 00:00 62874              /lib/x86_64-linux-gnu/libcrypt-2.23.so
7f89b471a000-7f89b4748000 rw-p 00000000 00:00 0
7f89b4750000-7f89b4753000 r-xp 00000000 00:00 62834              /lib/x86_64-linux-gnu/libdl-2.23.so
7f89b4753000-7f89b4754000 ---p 00003000 00:00 62834              /lib/x86_64-linux-gnu/libdl-2.23.so
7f89b4754000-7f89b4952000 ---p 00000004 00:00 62834              /lib/x86_64-linux-gnu/libdl-2.23.so
7f89b4952000-7f89b4953000 r--p 00002000 00:00 62834              /lib/x86_64-linux-gnu/libdl-2.23.so
7f89b4953000-7f89b4954000 rw-p 00003000 00:00 62834              /lib/x86_64-linux-gnu/libdl-2.23.so
7f89b4960000-7f89b49df000 r-xp 00000000 00:00 74076              /usr/lib/x86_64-linux-gnu/libgmp.so.10.3.0
7f89b49df000-7f89b49e0000 ---p 0007f000 00:00 74076              /usr/lib/x86_64-linux-gnu/libgmp.so.10.3.0
7f89b49e0000-7f89b4bde000 ---p 00000080 00:00 74076              /usr/lib/x86_64-linux-gnu/libgmp.so.10.3.0
7f89b4bde000-7f89b4bdf000 r--p 0007e000 00:00 74076              /usr/lib/x86_64-linux-gnu/libgmp.so.10.3.0
7f89b4bdf000-7f89b4be0000 rw-p 0007f000 00:00 74076              /usr/lib/x86_64-linux-gnu/libgmp.so.10.3.0
7f89b4be0000-7f89b4bf8000 r-xp 00000000 00:00 62819              /lib/x86_64-linux-gnu/libpthread-2.23.so
7f89b4bf8000-7f89b4c02000 ---p 00018000 00:00 62819              /lib/x86_64-linux-gnu/libpthread-2.23.so
7f89b4c02000-7f89b4df7000 ---p 00000022 00:00 62819              /lib/x86_64-linux-gnu/libpthread-2.23.so
7f89b4df7000-7f89b4df8000 r--p 00017000 00:00 62819              /lib/x86_64-linux-gnu/libpthread-2.23.so
7f89b4df8000-7f89b4df9000 rw-p 00018000 00:00 62819              /lib/x86_64-linux-gnu/libpthread-2.23.so
7f89b4df9000-7f89b4dfd000 rw-p 00000000 00:00 0
7f89b4e00000-7f89b4e25000 r-xp 00000000 00:00 62815              /lib/x86_64-linux-gnu/ld-2.23.so
7f89b4e25000-7f89b4e26000 r-xp 00025000 00:00 62815              /lib/x86_64-linux-gnu/ld-2.23.so
7f89b4e8d000-7f89b5025000 r--p 00000000 00:00 78673              /usr/lib/locale/locale-archive
7f89b5025000-7f89b5026000 r--p 00025000 00:00 62815              /lib/x86_64-linux-gnu/ld-2.23.so
7f89b5026000-7f89b5027000 rw-p 00026000 00:00 62815              /lib/x86_64-linux-gnu/ld-2.23.so
7f89b5027000-7f89b5028000 rw-p 00000000 00:00 0
7f89b509e000-7f89b50c0000 r--s 00000000 00:00 62819              /lib/x86_64-linux-gnu/libpthread-2.23.so
7f89b50c0000-7f89b50c1000 rw-p 00000000 00:00 0
7f89b50d0000-7f89b50d1000 rw-p 00000000 00:00 0
7f89b50e0000-7f89b50e1000 rw-p 00000000 00:00 0
7f89b50f0000-7f89b50f1000 rw-p 00000000 00:00 0
7f89b5100000-7f89b5101000 rw-p 00000000 00:00 0
7f89b5109000-7f89b5110000 r--s 00000000 00:00 63006              /usr/lib/x86_64-linux-gnu/gconv/gconv-modules.cache
7f89b5110000-7f89b5111000 ---p 00000000 00:00 0
7f89b5111000-7f89b5114000 rw-p 00000000 00:00 0
7f89b5200000-7f89b54e7000 r-xp 00000000 00:00 503902             /home/Johan/.rbenv/versions/2.3.3/bin/ruby
7f89b54e7000-7f89b54e8000 r-xp 002e7000 00:00 503902             /home/Johan/.rbenv/versions/2.3.3/bin/ruby
7f89b56e8000-7f89b56ed000 r--p 002e8000 00:00 503902             /home/Johan/.rbenv/versions/2.3.3/bin/ruby
7f89b56ed000-7f89b56ee000 rw-p 002ed000 00:00 503902             /home/Johan/.rbenv/versions/2.3.3/bin/ruby
7f89b56ee000-7f89b56ff000 rw-p 00000000 00:00 0
7fffc54f6000-7fffc6536000 rw-p 00000000 00:00 0                  [heap]
7fffccdae000-7fffcd5ae000 rw-p 00000000 00:00 0                  [stack]
7fffcd99b000-7fffcd99c000 r-xp 00000000 00:00 0                  [vdso]


[NOTE]
You may have encountered a bug in the Ruby interpreter or extension libraries.
Bug reports are welcome.
For details: http://www.ruby-lang.org/bugreport.html

Aborted (core dumped)
Johan@Surface:~$

```





















































