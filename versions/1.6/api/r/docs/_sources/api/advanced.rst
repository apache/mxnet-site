Advanced
====================================================

CAUTION: This section is only intended for advanced users. 
Direct interactions with KVStore and Executor are dangerous and not recommended.


Key-Value Store: Operate over multiple devices (GPUs) on a single device
--------------------------------------------------------------------------------------------------


======================================  ===========================
:doc:`mx.kv.create <./mx.kv.create>`    Create a mxnet KVStore
======================================  ===========================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.kv.create

Executor: Internal classes for managing symbolic graph execution
----------------------------------------------------------------------


==================================================================  =====================================================================================
:doc:`mx.exec.backward <./mx.exec.backward>`                        Peform an backward on the executors This function will MUTATE the state of exec
:doc:`mx.exec.forward <./mx.exec.forward>`                          Peform an forward on the executors This function will MUTATE the state of exec
:doc:`mx.exec.update.arg.arrays <./mx.exec.update.arg.arrays>`      Update the executors with new arrays This function will MUTATE the state of exec
:doc:`mx.exec.update.aux.arrays <./mx.exec.update.aux.arrays>`      Update the executors with new arrays This function will MUTATE the state of exec
:doc:`mx.exec.update.grad.arrays <./mx.exec.update.grad.arrays>`    Update the executors with new arrays This function will MUTATE the state of exec
:doc:`mx.simple.bind <./mx.simple.bind>`                            Simple bind the symbol to executor, with information from input shapes
==================================================================  =====================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.exec.backward
   mx.exec.forward
   mx.exec.update.arg.arrays
   mx.exec.update.aux.arrays
   mx.exec.update.grad.arrays
   mx.simple.bind

