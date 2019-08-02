.. raw:: html



``mx.symbol.IdentityAttachKLSparseReg``
==============================================================================

Description
----------------------

IdentityAttachKLSparseReg:Apply a sparse regularization to the output a sigmoid activation function.

Usage
----------

.. code:: r

	mx.symbol.IdentityAttachKLSparseReg(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``sparseness.target``                  | float, optional, default=0.1.                              |
|                                        |                                                            |
|                                        | The sparseness target                                      |
+----------------------------------------+------------------------------------------------------------+
| ``penalty``                            | float, optional, default=0.001.                            |
|                                        |                                                            |
|                                        | The tradeoff parameter for the sparseness penalty          |
+----------------------------------------+------------------------------------------------------------+
| ``momentum``                           | float, optional, default=0.9.                              |
|                                        |                                                            |
|                                        | The momentum for running average                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol



.. disqus::
   :disqus_identifier: mx.symbol.IdentityAttachKLSparseReg
