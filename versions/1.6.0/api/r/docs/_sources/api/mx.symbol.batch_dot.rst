

``mx.symbol.batch_dot``
==============================================

Description
----------------------

Batchwise dot product.

``batch_dot`` is used to compute dot product of ``x`` and ``y`` when ``x`` and
``y`` are data in batch, namely N-D (N >= 3) arrays in shape of `(B0, ..., B_i, :, :)`.

For example, given ``x`` with shape `(B_0, ..., B_i, N, M)` and ``y`` with shape
`(B_0, ..., B_i, M, K)`, the result array will have shape `(B_0, ..., B_i, N, K)`,
which is computed by::

	 batch_dot(x,y)[b_0, ..., b_i, :, :] = dot(x[b_0, ..., b_i, :, :], y[b_0, ..., b_i, :, :])
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.batch_dot(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The first input                                            |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The second input                                           |
+----------------------------------------+------------------------------------------------------------+
| ``transpose.a``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If true then transpose the first input before dot.         |
+----------------------------------------+------------------------------------------------------------+
| ``transpose.b``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If true then transpose the second input before dot.        |
+----------------------------------------+------------------------------------------------------------+
| ``forward.stype``                      | {None, 'csr', 'default', 'row_sparse'},optional,           |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | The desired storage type of the forward output given by    |
|                                        | user, if thecombination of input storage types and this    |
|                                        | hint does not matchany implemented ones, the dot operator  |
|                                        | will perform fallback operationand still produce an output |
|                                        | of the desired storage                                     |
|                                        | type.                                                      |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/dot.cc#L127

